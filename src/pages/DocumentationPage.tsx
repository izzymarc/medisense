import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Helmet } from 'react-helmet-async';

    export function DocumentationPage() {
    useEffect(() => {
        document.title = "Documentation - MediSense AI";
        return () => {
        document.title = "MediSense AI";
        };
    }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Documentation - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn how to use MediSense AI.
              </p>
              <div className="prose prose-lg mx-auto">
                <p>
                  This page will provide documentation for using MediSense AI.
                </p>
                <ul>
                  <li>Getting Started</li>
                  <li>API Reference</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </main>
          </div>
        );
    }
