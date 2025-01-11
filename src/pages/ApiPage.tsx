<file path="src/pages/ApiPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';

      export function ApiPage() {
        useEffect(() => {
          document.title = "API - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">API</h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore our API.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will provide information about our API.
                </p>
                <ul>
                  <li>API Documentation</li>
                  <li>API Keys</li>
                  <li>Usage Examples</li>
                </ul>
              </div>
            </main>
          </div>
        );
      }
    </file>
