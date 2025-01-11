<file path="src/pages/CareersPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';

      export function CareersPage() {
        useEffect(() => {
          document.title = "Careers - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers</h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore career opportunities at MediSense AI.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will list our current job openings.
                </p>
                <ul>
                  <li>Software Engineer</li>
                  <li>Data Scientist</li>
                  <li>UI/UX Designer</li>
                </ul>
              </div>
            </main>
          </div>
        );
      }
    </file>
