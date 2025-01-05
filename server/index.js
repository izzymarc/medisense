import express from 'express';
    import cors from 'cors';
    import dotenv from 'dotenv';
    import { connectDB } from './config/database.js';
    import { errorHandler } from './utils/errors.js';
    import authRoutes from './routes/auth.js';
    import profileRoutes from './routes/profile.js';
    import symptomRoutes from './routes/symptom.js';
    import path from 'path';
    import { fileURLToPath } from 'url';
    import mongoose from 'mongoose';

    dotenv.config();

    const app = express();

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/profile', profileRoutes);
    app.use('/api/symptoms', symptomRoutes);

    // Test DB Route
    app.get('/test-db', async (req, res) => {
      try {
        await mongoose.connect(process.env.MONGODB_URI);
        res.send('Database connection successful!');
      } catch (error) {
        console.error('Database connection failed:', error);
        res.status(500).send(`Database connection failed: ${error.message}`);
      } finally {
        await mongoose.disconnect();
      }
    });

    // Error handling middleware
    app.use(errorHandler);

    // Serve index.html for all other routes
    app.use((req, res, next) => {
      if (!req.url.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
      } else {
        next();
      }
    });

    // Connect to MongoDB before starting the server
    connectDB().then(() => {
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    }).catch(err => {
      console.error('Failed to connect to MongoDB:', err);
    });
