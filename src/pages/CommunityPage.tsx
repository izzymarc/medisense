import React from 'react';
    import { Header } from '../components/Header';

    export function CommunityPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our community.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                This page will provide links to our community forums.
              </p>
              <ul>
                <li>Community Forums</li>
                <li>Social Media</li>
                <li>User Groups</li>
              </ul>
            </div>
          </main>
        </div>
      );
    }
