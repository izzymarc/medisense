import React, { memo } from 'react';
import { SymptomTag } from './SymptomTag';
import { Symptom } from '../../../domain/models/Symptom';

interface SymptomListProps {
  symptoms: Symptom[];
  onRemove: (index: number) => void;
}

export const SymptomList = memo(({ symptoms, onRemove }: SymptomListProps) => (
  <div className="space-y-2">
    <h3 className="font-medium text-gray-700">Current Symptoms:</h3>
    <div className="flex flex-wrap gap-2">
      {symptoms.map((symptom, index) => (
        <SymptomTag
          key={index}
          description={symptom.description}
          onRemove={() => onRemove(index)}
        />
      ))}
    </div>
  </div>
));

SymptomList.displayName = 'SymptomList';
