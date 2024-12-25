export interface Symptom {
  id: string;
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
  timestamp: string;
}

export interface SymptomLog {
  id: string;
  symptoms: Symptom[];
  aiAdvice: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
