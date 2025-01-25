import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  getDocs
} from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import type { Symptom, SymptomLog } from '../types';

export const symptomService = {
  async createSymptomCheck(symptoms: Symptom[], aiAdvice: string) {
    const user = auth.currentUser;
    if (!user) throw new Error('No authenticated user');

    const symptomCheck = {
      userId: user.uid,
      symptoms,
      aiAdvice,
      createdAt: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, 'symptomChecks'), symptomCheck);
    return { id: docRef.id, ...symptomCheck };
  },

  async getHistory(limitCount = 10) {
    const user = auth.currentUser;
    if (!user) throw new Error('No authenticated user');

    const q = query(
      collection(db, 'symptomChecks'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as SymptomLog[];
  }
};