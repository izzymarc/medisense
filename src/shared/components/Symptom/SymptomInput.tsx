import React, { memo } from 'react';

interface SymptomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

export const SymptomInput = memo(({ 
  value,
  onChange,
  onAdd
}: SymptomInputProps) => (
  <div className="flex gap-2">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter a symptom..."
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      onKeyPress={(e) => e.key === 'Enter' && onAdd()}
      aria-label="Enter symptom description"
    />
    <button
      onClick={onAdd}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      aria-label="Add symptom"
    >
      Add
    </button>
  </div>
));

SymptomInput.displayName = 'SymptomInput';
