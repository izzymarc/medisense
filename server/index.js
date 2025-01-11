import express from 'express';
    import cors from 'cors';
    import dotenv from 'dotenv';
    import { errorHandler } from './utils/errors.js';
    import authRoutes from './routes/auth.js';
    import profileRoutes from './routes/profile.js';
    import symptomRoutes from './routes/symptom.js';
    import path from 'path';
    import { fileURLToPath } from 'url';

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

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
