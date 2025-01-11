import express from 'express';
    import { auth } from '../middleware/auth.js';
    import { symptomController } from '../controllers/symptom.controller.js';
    import { auth as firebaseAuth } from '../../src/firebase';
    import { doc, deleteDoc } from 'firebase/firestore';
    import { db } from '../../src/firebase';

    const router = express.Router();

    router.post('/check', auth, symptomController.create);
    router.get('/history', auth, symptomController.getHistory);
    router.delete('/history/:id', auth, async (req, res) => {
      try {
        const logId = req.params.id;
        const symptomDoc = doc(db, 'symptoms', logId);
        await deleteDoc(symptomDoc);
        res.json({ message: 'Symptom history deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message, details: error });
      }
    });

    export default router;
