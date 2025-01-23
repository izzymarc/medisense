import React, { useState, useCallback } from 'react';
import { SymptomInput } from '../../../shared/components/Symptom/SymptomInput';
import { SymptomList } from '../../../shared/components/Symptom/SymptomList';
import { AIAdvice } from '../../../shared/components/Symptom/AIAdvice';
import { Symptom } from '../../../domain/models/Symptom';
import { useApiCache } from '../../../shared/hooks/useApiCache';
import { gemini } from '../../../application/symptoms/SymptomService';
import { useTranslation } from '../../../shared/hooks/useTranslation';
import { trackEvent } from '../../../utils/analytics';

interface SymptomCheckerProps {
className?: string;
}

export function SymptomChecker({ className }: SymptomCheckerProps) {
const [symptoms, setSymptoms] = useState<Symptom[]>([]);
const [currentSymptom, setCurrentSymptom] = useState('');
const [selectedSeverity, setSelectedSeverity] = useState<Symptom['severity']>('mild');
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');
const { t } = useTranslation();

const cacheKey = `symptoms-${symptoms.map(s => `${s.description}-${s.severity}`).join(',')}`;

const { data: aiAdvice } = useApiCache<string>(cacheKey, async () => {
    if (symptoms.length === 0) return '';
    setIsLoading(true);
    setError('');

    try {
    const { aiAdvice } = await gemini.checkSymptoms(symptoms);
    trackEvent('SymptomChecker', 'Get AI Advice', JSON.stringify(symptoms));
    return aiAdvice;
    } catch (err) {
    const errorMessage = err instanceof Error ? err.message : t('errors.unknownError');
    setError(errorMessage);
    return '';
    } finally {
    setIsLoading(false);
    }
});

const handleSeverityChange = useCallback((severity: Symptom['severity']) => {
    setSelectedSeverity(severity);
}, []);

const addSymptom = useCallback(() => {
    const trimmedSymptom = currentSymptom.trim();
    if (trimmedSymptom) {
    try {
        setSymptoms(prev => [...prev, {
        description: trimmedSymptom,
        severity: selectedSeverity
        }]);
        setCurrentSymptom('');
        trackEvent('SymptomChecker', 'Add Symptom', `${trimmedSymptom} (${selectedSeverity})`);
    } catch (err) {
        setError(t('errors.addSymptomFailed'));
    }
    }
}, [currentSymptom, selectedSeverity, t]);

const removeSymptom = useCallback((index: number) => {
    const removedSymptom = symptoms[index].description;
    setSymptoms(prev => prev.filter((_, i) => i !== index));
    trackEvent('SymptomChecker', 'Remove Symptom', removedSymptom);
}, [symptoms]);

return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className || ''}`}>
    <h2 className="text-xl font-semibold mb-4">{t('symptomChecker')}</h2>

    <div className="space-y-4">
        <SymptomInput
        value={currentSymptom}
        severity={selectedSeverity}
        onChange={(e) => setCurrentSymptom(e.target.value)}
        onSeverityChange={handleSeverityChange}
        onAdd={addSymptom}
        error={error}
        />

        {symptoms.length > 0 && (
        <>
            <SymptomList symptoms={symptoms} onRemove={removeSymptom} />
            {error && (
            <div className="text-red-500 mt-2" role="alert" aria-live="assertive">
                {error}
            </div>
            )}
            <AIAdvice advice={aiAdvice || ''} loading={isLoading} />
        </>
        )}
    </div>
    </div>
);
}
