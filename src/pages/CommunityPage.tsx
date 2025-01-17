<file path="src/pages/CommunityPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
+     import { Helmet } from 'react-helmet-async';
 
      export function CommunityPage() {
        useEffect(() => {
          document.title = "Community - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
+           <Helmet><title>Community - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
</file>
