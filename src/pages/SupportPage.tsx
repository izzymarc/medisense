import React from 'react';
    import { Header } from '../components/Header';

    export function SupportPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get help and support.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                This page will provide support resources.
              </p>
              <ul>
                <li>Contact Support</li>
                <li>Help Center</li>
                <li>Community Forums</li>
              </ul>
            </div>
          </main>
        </div>
      );
    }
