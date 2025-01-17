<file path="src/pages/CareersPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
+     import { Helmet } from 'react-helmet-async';
 
      export function CareersPage() {
        useEffect(() => {
          document.title = "Careers - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
+           <Helmet><title>Careers - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers</h1>
</file>
