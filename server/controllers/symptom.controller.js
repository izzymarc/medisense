import axios from 'axios';
    import { auth as firebaseAuth } from '../../src/firebase';
    import { collection, addDoc, getDocs, query, where, orderBy, limit, startAfter, doc, deleteDoc } from 'firebase/firestore';
    import { db } from '../../src/firebase';

    const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

    export const symptomController = {
      create: async (req, res) => {
        try {
          const { symptoms } = req.body;
          const user = firebaseAuth.currentUser;

          if (!user) {
            return res.status(401).json({ error: 'User not authenticated' });
          }

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

          const symptomCollection = collection(db, 'symptoms');
          await addDoc(symptomCollection, {
            userId: user.uid,
            symptoms,
            aiAdvice,
            timestamp: new Date()
          });

          res.status(201).json({ aiAdvice, success: true });
        } catch (error) {
          res.status(400).json({ error: error.message, details: error.response?.data });
        }
      },

      getHistory: async (req, res) => {
        try {
          const user = firebaseAuth.currentUser;
          if (!user) {
            return res.status(401).json({ error: 'User not authenticated' });
          }
          const page = parseInt(req.query.page) || 1;
          const limitPerPage = parseInt(req.query.limit) || 5;
          const symptomCollection = collection(db, 'symptoms');
          let q = query(
            symptomCollection,
            where('userId', '==', user.uid),
            orderBy('timestamp', 'desc'),
            limit(limitPerPage)
          );
          const querySnapshot = await getDocs(q);
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

          res.json({
            history: symptomHistory,
            page,
            totalPages,
            totalCount
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    };
