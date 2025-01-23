import React from 'react';
    import { Header } from '../components/Header';

    export function FeaturesPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore the features of MediSense AI.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                This page will showcase the key features of our application.
              </p>
              <ul>
                <li>AI-Powered Symptom Analysis</li>
                <li>Personalized Health Insights</li>
                <li>Secure Data Storage</li>
                <li>User-Friendly Interface</li>
              </ul>
            </div>
          </main>
        </div>
      );
    }
