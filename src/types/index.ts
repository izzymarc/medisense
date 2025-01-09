export interface Symptom {
      _id: string;
      description: string;
      severity: 'mild' | 'moderate' | 'severe';
      timestamp: string;
    }
    
    export interface SymptomLog {
      _id: string;
      symptoms: Symptom[];
      aiAdvice: string;
      createdAt: string;
      userId: string;
    }
    
    export interface User {
      id: string;
      name: string;
      email: string;
      profilePicture?: string;
    }
