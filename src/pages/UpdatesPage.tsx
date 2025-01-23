import React from 'react';
    import { Header } from '../components/Header';

    export function UpdatesPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Updates</h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay up-to-date with our latest updates.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                This page will list our latest updates and releases.
              </p>
              <ul>
                <li>New Features</li>
                <li>Bug Fixes</li>
                <li>Performance Improvements</li>
              </ul>
            </div>
          </main>
        </div>
      );
    }
