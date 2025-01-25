import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  AuthError,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence
} from 'firebase/auth';
import { auth } from '../config/firebase';

const getErrorMessage = (error: AuthError) => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'Invalid email address format';
    case 'auth/user-disabled':
      return 'This account has been disabled';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password';
    case 'auth/email-already-in-use':
      return 'An account already exists with this email';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection and try again';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later';
    default:
      console.error('Firebase Auth Error:', error);
      return 'Authentication failed. Please try again';
  }
};

export const authService = {
  async login(email: string, password: string) {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      if (error instanceof Error && 'code' in error) {
        throw new Error(getErrorMessage(error as AuthError));
      }
      throw error;
    }
  },

  async register(name: string, email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      return userCredential.user;
    } catch (error) {
      if (error instanceof Error && 'code' in error) {
        throw new Error(getErrorMessage(error as AuthError));
      }
      throw error;
    }
  },

  async logout() {
    await signOut(auth);
  },

  getCurrentUser() {
    return auth.currentUser;
  },

  onAuthStateChanged(callback: (user: any) => void) {
    return onAuthStateChanged(auth, callback);
  }
};