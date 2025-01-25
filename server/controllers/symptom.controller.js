import { getFirestore } from 'firebase-admin/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ValidationError } from '../utils/errors.js';

const db = getFirestore();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export const symptomController = {
  create: async (req, res, next) => {
    try {
      const { symptoms } = req.body;
      if (!symptoms?.length) {
        throw new ValidationError('At least one symptom is required');
      }

      // Get AI analysis
      const prompt = `As a medical AI assistant, analyze these symptoms and provide initial guidance. Remember to always recommend consulting a healthcare professional for proper diagnosis.

Symptoms:
${symptoms.map(s => `- ${s.description} (${s.severity})`).join('\n')}

Please provide:
1. Possible causes
2. General recommendations
3. When to seek immediate medical attention`;

      const result = await model.generateContent(prompt);
      const aiAdvice = result.response.text();

      // Save to Firestore
      const symptomCheck = {
        userId: req.user.uid,
        symptoms,
        aiAdvice,
        createdAt: new Date().toISOString()
      };

      const docRef = await db.collection('symptomChecks').add(symptomCheck);
      
      res.status(201).json({
        id: docRef.id,
        ...symptomCheck
      });
    } catch (error) {
      next(error);
    }
  },

  getHistory: async (req, res, next) => {
    try {
      const snapshot = await db.collection('symptomChecks')
        .where('userId', '==', req.user.uid)
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get();

      const history = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      res.json(history);
    } catch (error) {
      next(error);
    }
  }
};