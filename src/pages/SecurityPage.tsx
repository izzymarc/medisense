<file path="src/pages/SecurityPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
      import { Helmet } from 'react-helmet-async';

      export function SecurityPage() {
        useEffect(() => {
          document.title = "Security - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Security - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Security</h1>
              <p className="text-xl text-gray-600 mb-8">
                We take your security seriously.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will provide information about the security measures we take to protect your data.
                </p>
                <ul>
                  <li>Data Encryption</li>
                  <li>Secure Authentication</li>
                  <li>Privacy Practices</li>
                </ul>
              </div>
            </main>
          </div>
        );
      }
    </file>
