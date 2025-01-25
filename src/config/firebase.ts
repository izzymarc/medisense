import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDUbJ7VSeUMwjTg1n8oT7GXiTZprhTjyE",
  authDomain: "medisense-a6fea.firebaseapp.com",
  projectId: "medisense-a6fea",
  storageBucket: "medisense-a6fea.firebasestorage.app",
  messagingSenderId: "940057609553",
  appId: "1:940057609553:web:733d6f51d39e93bf8fff70"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);