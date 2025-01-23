import React from 'react';
    import { Header } from '../components/Header';

    export function SecurityPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security</h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn about our security measures.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                This page will detail our security practices.
              </p>
              <ul>
                <li>Data Encryption</li>
                <li>Secure Authentication</li>
                <li>Regular Security Audits</li>
                <li>Privacy Compliance</li>
              </ul>
            </div>
          </main>
        </div>
      );
    }
