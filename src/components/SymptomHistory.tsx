import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import type { SymptomLog } from '../types';

const mockHistory: SymptomLog[] = [
  {
    id: '1',
    symptoms: [
      { id: '1', description: 'Headache', severity: 'moderate', timestamp: '2024-03-10T10:00:00Z' },
      { id: '2', description: 'Fatigue', severity: 'mild', timestamp: '2024-03-10T10:00:00Z' }
    ],
    aiAdvice: 'Based on your symptoms, you may be experiencing tension headache. Consider rest and over-the-counter pain relievers. If symptoms persist, consult a healthcare provider.',
    createdAt: '2024-03-10T10:00:00Z'
  }
];

export function SymptomHistory() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent History</h2>
      
      <div className="space-y-4">
        {mockHistory.map((log) => (
          <div key={log.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{new Date(log.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Symptoms:</h4>
                <div className="flex flex-wrap gap-2">
                  {log.symptoms.map((symptom) => (
                    <span
                      key={symptom.id}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {symptom.description}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  AI Advice:
                </h4>
                <p className="text-gray-600">{log.aiAdvice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}