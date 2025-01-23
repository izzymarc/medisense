import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
      import { Helmet } from 'react-helmet-async';

      export function PricingPage() {
        useEffect(() => {
          document.title = "Pricing - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Pricing - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose the plan that's right for you.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will provide information about our pricing plans.
                </p>
                <ul>
                  <li>Free Plan</li>
                  <li>Premium Plan</li>
                  <li>Enterprise Plan</li>
                </ul>
              </div>
            </main>
          </div>
        );
    }
