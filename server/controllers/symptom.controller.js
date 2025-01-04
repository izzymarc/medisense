import { SymptomCheck } from '../models/SymptomCheck.js';
    import axios from 'axios';

    const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

    export const symptomController = {
      create: async (req, res) => {
        try {
          const { symptoms } = req.body;

          if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({ error: 'Symptoms array is required and cannot be empty' });
          }

          const prompt = `Analyze the following symptoms and provide a brief, informative response. If the symptoms suggest a serious condition, advise the user to seek professional medical care. Symptoms: ${symptoms.map(symptom => symptom.description).join(', ')}`;

          const response = await axios.post(geminiApiUrl, {
            contents: [{
              parts: [{ text: prompt }]
            }]
          }, {
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': process.env.GEMINI_API_KEY
            }
          });

          const aiAdvice = response.data.candidates[0].content.parts[0].text;

          const symptomCheck = new SymptomCheck({
            userId: req.userId,
            symptoms,
            aiAdvice
          });
          
          await symptomCheck.save();
          res.status(201).json({ aiAdvice, success: true });
        } catch (error) {
          res.status(400).json({ error: error.message, details: error.response?.data });
        }
      },

      getHistory: async (req, res) => {
        try {
          const page = parseInt(req.query.page) || 1;
          const limit = parseInt(req.query.limit) || 5;
          const skip = (page - 1) * limit;

          const history = await SymptomCheck.find({ userId: req.userId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

          const totalCount = await SymptomCheck.countDocuments({ userId: req.userId });
          const totalPages = Math.ceil(totalCount / limit);

          res.json({
            history,
            page,
            totalPages,
            totalCount
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    };
