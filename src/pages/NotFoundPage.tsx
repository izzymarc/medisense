import React from 'react';
    import { Header } from '../components/Header';
    import { NavLink } from '../components/NavLink';

    export function NotFoundPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page not found</p>
            <NavLink href="/" variant="button">
              Return Home
            </NavLink>
          </main>
        </div>
      );
    }
