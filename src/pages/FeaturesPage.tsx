import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet-async';

      export function FeaturesPage() {
        useEffect(() => {
          document.title = "Features - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Features - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore the features of MediSense AI.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will provide information about the features of MediSense AI.
                </p>
                <ul>
                  <li>Symptom Checker</li>
                  <li>AI-Powered Analysis</li>
                  <li>Personalized Insights</li>
                </ul>
              </div>
            </main>
          </div>
        );
    }
