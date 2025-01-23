import express from 'express';
    import { auth } from '../middleware/auth.js';
    import { symptomController } from '../controllers/symptom.controller.js';
    import { SymptomCheck } from '../models/SymptomCheck.js';

    const router = express.Router();

    router.post('/check', auth, symptomController.create);
    router.get('/history', auth, symptomController.getHistory);
    router.delete('/history/:id', auth, async (req, res) => {
      try {
        const logId = req.params.id;
        console.log(`Attempting to delete symptom history with ID: ${logId}`);
        const result = await SymptomCheck.findByIdAndDelete(logId);
        if (!result) {
          console.log(`Symptom history with ID: ${logId} not found`);
          return res.status(404).json({ error: 'Symptom history not found' });
        }
        console.log(`Symptom history with ID: ${logId} deleted successfully`);
        res.json({ message: 'Symptom history deleted successfully' });
      } catch (error) {
        console.error('Error deleting symptom history:', error);
        res.status(500).json({ error: error.message, details: error });
      }
    });

    export default router;
