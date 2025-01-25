import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './utils/errors.js';
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import symptomRoutes from './routes/symptom.js';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

dotenv.config();

// Initialize Firebase Admin
initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  })
});

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://medisense.pages.dev', 'https://*.medisense.pages.dev']
    : '*'
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/symptoms', symptomRoutes);

// Error handling middleware
app.use(errorHandler);

// Serverless handler
export const handler = serverless(app);