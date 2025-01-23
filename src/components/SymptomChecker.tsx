import React, { useState } from 'react';
    import { PlusCircle, Send } from 'lucide-react';
    import { gemini } from '../services/api';

    export function SymptomChecker() {
      const [symptoms, setSymptoms] = useState<{ description: string, severity: string }[]>([]);
      const [currentSymptom, setCurrentSymptom] = useState('');
      const [aiAdvice, setAiAdvice] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');

      const addSymptom = () => {
        if (currentSymptom.trim()) {
          setSymptoms([...symptoms, { description: currentSymptom.trim(), severity: 'mild' }]);
          setCurrentSymptom('');
        }
      };

      const removeSymptom = (index: number) => {
        setSymptoms(symptoms.filter((_, i) => i !== index));
      };

      const handleCheckSymptoms = async () => {
        setIsLoading(true);
        setError('');
        setAiAdvice('');
        if (symptoms.length === 0) {
          setError('Please enter at least one symptom.');
          setIsLoading(false);
          return;
        }
        try {
          const response = await gemini.checkSymptoms(symptoms);
          setAiAdvice(response.aiAdvice);
        } catch (err: any) {
          setError(err.message || 'Failed to get AI analysis');
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Symptom Checker</h2>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={currentSymptom}
                onChange={(e) => setCurrentSymptom(e.target.value)}
                placeholder="Enter a symptom..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                onKeyPress={(e) => e.key === 'Enter' && addSymptom()}
              />
              <button
                onClick={addSymptom}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <PlusCircle className="h-5 w-5" />
                Add
              </button>
            </div>

            {symptoms.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700">Current Symptoms:</h3>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      {symptom.description}
                      <button
                        onClick={() => removeSymptom(index)}
                        className="hover:text-blue-600"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <button
                  onClick={handleCheckSymptoms}
                  disabled={isLoading}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  {isLoading ? 'Analyzing...' : 'Get AI Analysis'}
                </button>
              </div>
            )}

            {error && <p className="text-red-500 mt-2">{error}</p>}
            {aiAdvice && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">AI Advice:</h4>
                <p className="text-gray-600">{aiAdvice}</p>
              </div>
            )}
          </div>
        </div>
      );
    }
