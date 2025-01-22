<file path="src/pages/CareersPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
      import { Helmet } from 'react-helmet-async';

      export function CareersPage() {
        useEffect(() => {
          document.title = "Careers - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Careers - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers</h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our team and help us make a difference in healthcare.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  We are always looking for talented individuals to join our team.
                </p>
                <ul>
                  <li>Open Positions</li>
                  <li>How to Apply</li>
                  <li>Benefits</li>
                </ul>
              </div>
            </main>
          </div>
        );
      }
    </file>
