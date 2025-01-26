import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyBCxlLPkZ9drEWaHhSAXXafPMPR95XciJw');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export const geminiService = {
  async analyzeSymptoms(symptoms: { description: string; severity: string }[]) {
    try {
      const prompt = `As a medical AI assistant, analyze these symptoms and provide initial guidance. Remember to always recommend consulting a healthcare professional for proper diagnosis.

Symptoms:
${symptoms.map(s => `- ${s.description} (${s.severity})`).join('\n')}

Please provide:
1. Possible causes
2. General recommendations
3. When to seek immediate medical attention`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error('Failed to analyze symptoms. Please try again later.');
    }
  }
};