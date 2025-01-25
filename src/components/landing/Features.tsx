import React from 'react';
import { Brain, Clock, Shield, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze your symptoms and provide personalized insights.'
  },
  {
    icon: Clock,
    title: 'Instant Results',
    description: 'Get immediate feedback and recommendations for your health concerns.'
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your health data is encrypted and protected with enterprise-grade security.'
  },
  {
    icon: Stethoscope,
    title: 'Medical Expertise',
    description: 'Built with input from healthcare professionals for accurate guidance.'
  }
];

export function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose MediSense AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience healthcare guidance powered by cutting-edge technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-blue-50 to-white border border-blue-100"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}