import React, { memo } from 'react';
import { useTranslation } from '../../../shared/hooks/useTranslation';

interface SymptomInputProps {
value: string;
severity: 'mild' | 'moderate' | 'severe';
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
onSeverityChange: (severity: 'mild' | 'moderate' | 'severe') => void;
onAdd: () => void;
error?: string;
disabled?: boolean;
}

export const SymptomInput = memo(({
value,
severity,
onChange,
onSeverityChange,
onAdd,
error,
disabled = false
}: SymptomInputProps) => {
const { t } = useTranslation();

return (
    <div className="flex flex-col gap-2">
    <div className="flex gap-2">
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={t('symptom.input.placeholder', 'Enter a symptom...')}
        className={`flex-1 px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none`}
        onKeyPress={(e) => e.key === 'Enter' && !disabled && onAdd()}
        aria-label="Enter symptom description"
        aria-invalid={!!error}
        disabled={disabled}
        />
        <select
        value={severity}
        onChange={(e) => onSeverityChange(e.target.value as 'mild' | 'moderate' | 'severe')}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
        aria-label="Select symptom severity"
        disabled={disabled}
        >
        <option value="mild">{t('symptom.severity.mild', 'Mild')}</option>
        <option value="moderate">{t('symptom.severity.moderate', 'Moderate')}</option>
        <option value="severe">{t('symptom.severity.severe', 'Severe')}</option>
        </select>
        <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        aria-label="Add symptom"
        disabled={disabled}
        >
        {t('symptom.input.add', 'Add')}
        </button>
    </div>
    {error && (
        <p className="text-red-500 text-sm" role="alert">
        {error}
        </p>
    )}
    </div>
    </div>
);
});

SymptomInput.displayName = 'SymptomInput';
