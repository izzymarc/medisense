import mongoose from 'mongoose';

const symptomSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  severity: {
    type: String,
    enum: ['mild', 'moderate', 'severe'],
    required: true
  }
});

const symptomCheckSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  symptoms: [symptomSchema],
  aiAdvice: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const SymptomCheck = mongoose.model('SymptomCheck', symptomCheckSchema);