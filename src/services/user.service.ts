import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  collection
} from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import type { User } from '../types';

export const userService = {
  async getProfile() {
    const user = auth.currentUser;
    if (!user) throw new Error('No authenticated user');

    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as User;
    } else {
      // Create profile if it doesn't exist
      const userData = {
        id: user.uid,
        name: user.displayName || '',
        email: user.email || ''
      };
      await setDoc(docRef, userData);
      return userData;
    }
  },

  async updateProfile(updates: Partial<User>) {
    const user = auth.currentUser;
    if (!user) throw new Error('No authenticated user');

    const docRef = doc(db, 'users', user.uid);
    await updateDoc(docRef, updates);
    return updates;
  }
};