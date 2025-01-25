import React, { useState } from 'react';
import { PlusCircle, Send, Loader2 } from 'lucide-react';
import { geminiService } from '../services/gemini.service';
import { symptomService } from '../services/symptom.service';
import { Alert } from './common/Alert';

export function SymptomChecker() {
  const [symptoms, setSymptoms] = useState<Array<{ description: string; severity: string }>>([]);
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [currentSeverity, setCurrentSeverity] = useState('moderate');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const addSymptom = () => {
    if (currentSymptom.trim()) {
      setSymptoms([...symptoms, { 
        description: currentSymptom.trim(), 
        severity: currentSeverity 
      }]);
      setCurrentSymptom('');
    }
  };

  const removeSymptom = (index: number) => {
    setSymptoms(symptoms.filter((_, i) => i !== index));
  };

  const analyzeSymptoms = async () => {
    if (symptoms.length === 0) {
      setError('Please add at least one symptom');
      return;
    }

    setIsAnalyzing(true);
    setError('');
    
    try {
      const analysis = await geminiService.analyzeSymptoms(symptoms);
      setResult(analysis);
      
      // Save to history
      await symptomService.createSymptomCheck(
        symptoms.map(s => ({ 
          ...s, 
          id: crypto.randomUUID(),
          timestamp: new Date().toISOString()
        })), 
        analysis
      );
    } catch (err) {
      setError('Failed to analyze symptoms. Please try again.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
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
          <select
            value={currentSeverity}
            onChange={(e) => setCurrentSeverity(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
          <button
            onClick={addSymptom}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            Add
          </button>
        </div>

        {error && (
          <Alert type="error" message={error} />
        )}

        {symptoms.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium text-gray-700">Current Symptoms:</h3>
            <div className="flex flex-wrap gap-2">
              {symptoms.map((symptom, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {symptom.description} ({symptom.severity})
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
              onClick={analyzeSymptoms}
              disabled={isAnalyzing}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Get AI Analysis
                </>
              )}
            </button>
          </div>
        )}

        {result && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Analysis Result:</h3>
            <div className="prose prose-blue max-w-none">
              {result.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}