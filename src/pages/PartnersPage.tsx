<file path="src/pages/PartnersPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
+     import { Helmet } from 'react-helmet-async';
       import { NavLink } from '../components/NavLink';
 
      export function PartnersPage() {
        useEffect(() => {
          document.title = "Partners - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
+           <Helmet><title>Our Partners - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
</file>
