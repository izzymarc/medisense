export type SeverityLevel = 'mild' | 'moderate' | 'severe';

export interface Symptom {
description: string;
severity: SeverityLevel;
}
