import React, { useState, useCallback } from 'react';
import { SymptomInput } from './SymptomInput';
import { SymptomList } from './SymptomList';
import { Symptom } from '../types';
import { useApiCache } from '../hooks/useApiCache';
import { gemini } from '../services/api';

export function SymptomChecker() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { data: aiAdvice } = useApiCache<string>(
    `symptoms-${symptoms.map(s => s.description).join(',')}`,
    async () => {
      if (symptoms.length === 0) return '';
      const { aiAdvice } = await gemini.checkSymptoms(symptoms);
      return aiAdvice;
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
            
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {aiAdvice && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">AI Advice:</h4>
                <p className="text-gray-600">{aiAdvice}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
