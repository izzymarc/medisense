import express from 'express';
import { auth } from '../middleware/auth.js';
import { admin, db } from '../config/firebase.js';
import multer from 'multer';
import path from 'path';
import { apiResponse } from '../utils/apiResponse.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});

const upload = multer({ storage });

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get the current user's profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', auth, async (req, res) => {
  try {
    const user = await admin.auth().getUser(req.userId);
    if (!user) {
      return apiResponse(res, 401, 'User not authenticated');
    }
    apiResponse(res, 200, 'User profile retrieved successfully', { id: user.uid, name: user.displayName, email: user.email, profilePicture: user.photoURL });
  } catch (error) {
    apiResponse(res, 500, 'Server error', error.message);
  }
});

/**
 * @swagger
 * /profile:
 *   patch:
 *     summary: Update the current user's profile
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.patch('/', auth, upload.single('profilePicture'), async (req, res) => {
  const updates = {};
  const { name, email, currentPassword, newPassword } = req.body;
  try {
    const user = await admin.auth().getUser(req.userId);
    if (!user) {
      return apiResponse(res, 401, 'User not authenticated');
    }

    if (name) updates.displayName = name;
    if (req.file) updates.photoURL = `/uploads/${req.file.filename}`;

    if (currentPassword && newPassword) {
      // Firebase does not support password update with current password
      // This should be handled on the client side
      // For now, we will just update the profile
    }
    await admin.auth().updateUser(user.uid, updates);
    const updatedUser = await admin.auth().getUser(user.uid);
    apiResponse(res, 200, 'User profile updated successfully', { user: { id: updatedUser.uid, name: updatedUser.displayName, email: updatedUser.email, profilePicture: updatedUser.photoURL } });
  } catch (error) {
    apiResponse(res, 400, 'Invalid input', error.message);
  }
});

export default router;
