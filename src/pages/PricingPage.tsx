<file path="src/pages/PricingPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';

      export function PricingPage() {
        useEffect(() => {
          document.title = "Pricing - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
              <p className="text-xl text-gray-600 mb-8">
                View our pricing plans.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will display our pricing plans.
                </p>
                <ul>
                  <li>Free Plan: Basic access</li>
                  <li>Premium Plan: Advanced features</li>
                  <li>Enterprise Plan: Custom solutions</li>
                </ul>
              </div>
            </main>
          </div>
        );
      }
    </file>
