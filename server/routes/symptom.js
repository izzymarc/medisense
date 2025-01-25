import express from 'express';
import { auth } from '../middleware/auth.js';
import { symptomController } from '../controllers/symptom.controller.js';

const router = express.Router();

router.post('/check', auth, symptomController.create);
router.get('/history', auth, symptomController.getHistory);

export default router;