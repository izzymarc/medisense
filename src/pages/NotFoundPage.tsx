<file path="src/pages/NotFoundPage.tsx">
      import React, { useEffect } from 'react';
      import { Helmet } from 'react-helmet-async';
      import { Header } from '../components/Header';
      import { NavLink } from '../components/NavLink';

      export function NotFoundPage() {
        useEffect(() => {
          document.title = "Page Not Found - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Page Not Found - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">
                Oops! The page you're looking for could not be found.
              </p>
              <NavLink to="/" variant="button">
                Return to Home
              </NavLink>
            </main>
          </div>
        );
      }
    </file>
