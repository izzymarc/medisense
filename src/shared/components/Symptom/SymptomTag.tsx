import React, { memo } from 'react';

type Severity = 'mild' | 'moderate' | 'severe';

interface SymptomTagProps {
description: string;
severity: Severity;
onRemove: () => void;
}

const severityColors: Record<Severity, { bg: string; text: string; ring: string }> = {
mild: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    ring: 'ring-green-500'
},
moderate: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    ring: 'ring-yellow-500'
},
severe: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    ring: 'ring-red-500'
}
};

export const SymptomTag = memo(({ description, severity, onRemove }: SymptomTagProps) => {
const colors = severityColors[severity];

return (
    <span 
    className={`${colors.bg} ${colors.text} px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium`}
    role="listitem"
    aria-label={`${severity} severity symptom: ${description}`}
    >
    <span className="flex items-center gap-1.5">
        <span 
        className={`w-2 h-2 rounded-full ${severity === 'severe' ? 'animate-pulse' : ''} ${colors.bg} border ${colors.text} border-current`}
        aria-hidden="true"
        />
        {description}
    </span>
    <button
        type="button"
        onClick={onRemove}
        className={`hover:${colors.text} transition-colors focus:outline-none focus:ring-2 focus:${colors.ring} focus:ring-offset-1 rounded-full`}
        aria-label={`Remove ${severity} symptom ${description}`}
    >
        <span aria-hidden="true" className="text-lg leading-none">&times;</span>
    </button>
    </span>
);
});

SymptomTag.displayName = 'SymptomTag';
