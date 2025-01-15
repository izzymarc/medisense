import React, { useState, useCallback } from 'react';
import { SymptomInput } from '../../../shared/components/Symptom/SymptomInput';
import { SymptomList } from '../../../shared/components/Symptom/SymptomList';
import { AIAdvice } from '../../../shared/components/Symptom/AIAdvice';
import { Symptom } from '../../../domain/models/Symptom';
import { useApiCache } from '../../../shared/hooks/useApiCache';
import { gemini } from '../../../application/symptoms/SymptomService';

export function SymptomChecker() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { data: aiAdvice } = useApiCache<string>(
    `symptoms-${symptoms.map(s => s.description).join(',')}`,
    async () => {
      if (symptoms.length === 0) return '';
      setIsLoading(true);
      try {
        const { aiAdvice } = await gemini.checkSymptoms(symptoms);
        return aiAdvice;
      } finally {
        setIsLoading(false);
      }
    }
  );

  const addSymptom = useCallback(() => {
    if (currentSymptom.trim()) {
      setSymptoms(prev => [...prev, { 
        description: currentSymptom.trim(), 
        severity: 'mild' 
      }]);
      setCurrentSymptom('');
    }
  }, [currentSymptom]);

  const removeSymptom = useCallback((index: number) => {
    setSymptoms(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Symptom Checker</h2>
      
      <div className="space-y-4">
        <SymptomInput
          value={currentSymptom}
          onChange={(e) => setCurrentSymptom(e.target.value)}
          onAdd={addSymptom}
        />

        {symptoms.length > 0 && (
          <>
            <SymptomList symptoms={symptoms} onRemove={removeSymptom} />
            
            {error && (
              <div 
                className="text-red-500 mt-2"
                role="alert"
                aria-live="assertive"
              >
                {error}
              </div>
            )}
            
            <AIAdvice advice={aiAdvice || ''} loading={isLoading} />
          </>
        )}
      </div>
    </div>
  );
}
