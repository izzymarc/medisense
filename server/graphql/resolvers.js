import { admin, db } from '../config/firebase.js';
import axios from 'axios';
import { notificationService } from '../services/notification.service.js';

const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const resolvers = {
  Query: {
    user: async (_parent, { id }) => {
      try {
        const user = await admin.auth().getUser(id);
        return {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL
        };
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    },
    symptomHistory: async (_parent, { userId, page = 1, limit = 5 }) => {
      try {
        const symptomCollection = db.collection('symptoms');
        let q = symptomCollection
          .where('userId', '==', userId)
          .orderBy('timestamp', 'desc')
          .limit(limit);

        const querySnapshot = await q.get();
        return querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            symptoms: data.symptoms,
            aiAdvice: data.aiAdvice,
            createdAt: data.timestamp.toDate().toLocaleDateString(),
            userId: data.userId
          };
        });
      } catch (error) {
        console.error('Error fetching symptom history:', error);
        return [];
      }
    },
  },
  Mutation: {
    checkSymptoms: async (_parent, { symptoms }, context) => {
      try {
        const user = await admin.auth().getUser(context.userId);
        if (!user) {
          throw new Error('User not authenticated');
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
        const docRef = await symptomCollection.add({
          userId: user.uid,
          symptoms,
          aiAdvice,
          timestamp: new Date()
        });

        await notificationService.sendNotification(user.uid, 'New symptom check performed');

        return {
          id: docRef.id,
          symptoms,
          aiAdvice,
          createdAt: new Date().toLocaleDateString(),
          userId: user.uid
        };
      } catch (error) {
        console.error('Error checking symptoms:', error);
        throw error;
      }
    },
  },
};

export default resolvers;
