import React, { memo, useMemo } from 'react';
import { SymptomTag } from './SymptomTag';
import { Symptom } from '../../../domain/models/Symptom';
import { useTranslation } from '../../../shared/hooks/useTranslation';

interface SymptomListProps {
symptoms: Symptom[];
onRemove: (index: number) => void;
}

const severityOrder = {
'severe': 0,
'moderate': 1,
'mild': 2
};

export const SymptomList = memo(({ symptoms, onRemove }: SymptomListProps) => {
const { t } = useTranslation();

const sortedSymptoms = useMemo(() => {
    return [...symptoms].sort((a, b) => 
    severityOrder[a.severity] - severityOrder[b.severity]
    );
}, [symptoms]);

return (
    <div className="space-y-2">
    <h3 className="font-medium text-gray-700">{t('symptom.list.title', 'Current Symptoms:')}</h3>
    <div 
        className="flex flex-wrap gap-2"
        aria-label={t('symptom.list.aria.label', 'List of current symptoms')}
        role="list"
    >
        {sortedSymptoms.map((symptom, index) => (
        <SymptomTag
            key={index} 
            description={symptom.description}
            severity={symptom.severity}
            onRemove={() => onRemove(index)}
        />
        ))}
    </div>
    </div>
);
});

SymptomList.displayName = 'SymptomList';
