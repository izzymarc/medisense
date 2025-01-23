import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './utils/errors.js';
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import symptomRoutes from './routes/symptom.js';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import { apiLimiter } from './middleware/rateLimit.js';
import http from 'http';
import wss from './config/websocket.js';
import notificationWorker from './workers/notification.worker.js';
import applyApolloMiddleware from './config/apollo.js';
import migrateData from './utils/migration.js';
import { featureFlag } from './middleware/featureFlag.js';
import setupTracer from './config/tracer.js';
import { requestLogger } from './middleware/requestLogger.js';

dotenv.config();

const app = express();
const server = http.createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Tracer
setupTracer();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(requestLogger);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Versioning and Rate Limiting
app.use('/api/v1', apiLimiter);

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/symptoms', featureFlag('enableSymptomHistory'), symptomRoutes);

// Health Endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
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

// Apply Apollo GraphQL middleware
applyApolloMiddleware(app, server);

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  // Run data migration on server start
  await migrateData();
});
