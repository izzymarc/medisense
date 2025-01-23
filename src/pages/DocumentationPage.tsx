import React from 'react';
    import { Header } from '../components/Header';

    export function DocumentationPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Access our documentation.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                This page will provide links to our documentation.
              </p>
              <ul>
                <li>API Documentation</li>
                <li>User Guides</li>
                <li>FAQ</li>
              </ul>
            </div>
          </main>
        </div>
      );
    }
