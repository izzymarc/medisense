import React, { memo } from 'react';

interface SymptomTagProps {
  description: string;
  onRemove: () => void;
}

export const SymptomTag = memo(({ description, onRemove }: SymptomTagProps) => (
  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2">
    {description}
    <button
      onClick={onRemove}
      className="hover:text-blue-600"
      aria-label={`Remove symptom ${description}`}
    >
      ×
    </button>
  </span>
));

SymptomTag.displayName = 'SymptomTag';
