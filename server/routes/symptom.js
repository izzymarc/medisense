import express from 'express';
import axios from 'axios';
import { auth } from '../middleware/auth.js';
import { db, admin } from '../config/firebase.js';
import { apiResponse, apiError } from '../utils/apiResponse.js';

const router = express.Router();

const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

/**
 * @swagger
 * /symptoms/check:
 *   post:
 *     summary: Analyze symptoms and get AI advice
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               symptoms:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                     severity:
 *                       type: string
 *     responses:
 *       201:
 *         description: AI advice generated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/check', auth, async (req, res) => {
  try {
    const { symptoms } = req.body;
    const user = await admin.auth().getUser(req.userId);

    if (!user) {
      return apiError(res, 401, 'User not authenticated');
    }

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return apiError(res, 400, 'Symptoms array is required and cannot be empty');
    }

    const prompt = `Analyze the following symptoms and provide a brief, informative response. If the symptoms suggest a serious condition, advise the user to seek professional medical care. Symptoms: ${symptoms.map(symptom => symptom.description).join(', ')}`;

    const response = await axios.post(geminiApiUrl, {
      contents: [{
        parts: [{ text: prompt }]
      }]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.VITE_GEMINI_API_KEY
      }
    });

    const aiAdvice = response.data.candidates[0].content.parts[0].text;

    const symptomCollection = db.collection('symptoms');
    await symptomCollection.add({
      userId: user.uid,
      symptoms,
      aiAdvice,
      timestamp: new Date()
    });

    apiResponse(res, 201, 'AI advice generated successfully', { aiAdvice, success: true });
  } catch (error) {
    apiError(res, 400, 'Invalid input', error.message, error.response?.data);
  }
});

/**
 * @swagger
 * /symptoms/history:
 *   get:
 *     summary: Get the symptom history for the current user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: Symptom history retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/history', auth, async (req, res) => {
  try {
    const user = await admin.auth().getUser(req.userId);
    if (!user) {
      return apiError(res, 401, 'User not authenticated');
    }
    const page = parseInt(req.query.page) || 1;
    const limitPerPage = parseInt(req.query.limit) || 5;
    const symptomCollection = db.collection('symptoms');
    let q = symptomCollection
      .where('userId', '==', user.uid)
      .orderBy('timestamp', 'desc')
      .limit(limitPerPage);

    const querySnapshot = await q.get();
    const symptomHistory = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        _id: doc.id,
        symptoms: data.symptoms,
        aiAdvice: data.aiAdvice,
        createdAt: data.timestamp.toDate().toLocaleDateString(),
        userId: data.userId
      };
    });
    const totalCount = querySnapshot.size;
    const totalPages = Math.ceil(totalCount / limitPerPage);

    apiResponse(res, 200, 'Symptom history retrieved successfully', {
      history: symptomHistory,
      page,
      totalPages,
      totalCount
    });
  } catch (error) {
    apiError(res, 500, 'Server error', error.message);
  }
});

/**
 * @swagger
 * /symptoms/history/{id}:
 *   delete:
 *     summary: Delete a specific symptom history log
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the symptom history log to delete
 *     responses:
 *       200:
 *         description: Symptom history deleted successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.delete('/history/:id', auth, async (req, res) => {
  try {
    const logId = req.params.id;
    const symptomDoc = db.collection('symptoms').doc(logId);
    await symptomDoc.delete();
    apiResponse(res, 200, 'Symptom history deleted successfully');
  } catch (error) {
    apiError(res, 500, 'Server error', error.message, error);
  }
});

export default router;
