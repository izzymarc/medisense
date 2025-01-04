import React from 'react';
    import { Header } from '../components/Header';

    export function ContactPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with us.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                This page will provide contact information.
              </p>
              <ul>
                <li>Email: support@medisenseai.com</li>
                <li>Phone: +1-555-123-4567</li>
                <li>Address: 123 Main St, Anytown, USA</li>
              </ul>
            </div>
          </main>
        </div>
      );
    }
