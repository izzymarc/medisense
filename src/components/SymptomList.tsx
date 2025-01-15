import React, { memo } from 'react';
import { Symptom } from '../types';

export const SymptomList = memo(({
  symptoms,
  onRemove
}: {
  symptoms: Symptom[];
  onRemove: (index: number) => void;
}) => (
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
            onClick={() => onRemove(index)}
            className="hover:text-blue-600"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  </div>
));

SymptomList.displayName = 'SymptomList';
