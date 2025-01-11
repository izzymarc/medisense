<file path="src/pages/DashboardPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
      import { SymptomChecker } from '../components/SymptomChecker';
      import { SymptomHistory } from '../components/SymptomHistory';
      import { useAuth } from '../contexts/AuthContext';

      export function DashboardPage() {
        const { user } = useAuth();
        useEffect(() => {
          document.title = "Dashboard - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8">
              {user && (
                <h1 className="text-2xl font-bold mb-6">
                  Welcome, {user.name}!
                </h1>
              )}
              <div className="grid md:grid-cols-2 gap-8">
                <SymptomChecker />
                <SymptomHistory />
              </div>
            </main>
          </div>
        );
      }
    </file>
