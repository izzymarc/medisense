import React, { memo } from 'react';
import { useTranslation } from '../../../shared/hooks/useTranslation';

interface AIAdviceProps {
advice: string;
loading: boolean;
}

export const AIAdvice = memo(({ advice, loading }: AIAdviceProps) => {
const { t } = useTranslation();

return (
    <div
    className="mt-4 p-4 bg-gray-100 rounded-lg"
    aria-live="polite"
    aria-busy={loading}
    >
    <h4 className="font-medium text-gray-700 mb-2">{t('symptom.advice.title', 'AI Advice:')}</h4>
    <p className="text-gray-600">
        {loading ? t('symptom.advice.loading', 'Analyzing symptoms...') : advice}
    </p>
    </div>
);
});

AIAdvice.displayName = 'AIAdvice';
AIAdvice.displayName = 'AIAdvice';
