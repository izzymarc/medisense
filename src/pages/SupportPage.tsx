import React from 'react';
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet-async';

      export function SupportPage() {
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Support - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Support</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're here to help.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will provide information about how to get support for MediSense AI.
                </p>
                <ul>
                  <li>Contact Support</li>
                  <li>FAQ</li>
                  <li>Troubleshooting</li>
                </ul>
              </div>
            </main>
          </div>
        );
    }
