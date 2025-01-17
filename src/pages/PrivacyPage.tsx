<file path="src/pages/PrivacyPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
+     import { Helmet } from 'react-helmet-async';
       import { Shield, Lock, FileText, Eye } from 'lucide-react';
 
      export function PrivacyPage() {
        useEffect(() => {
          document.title = "Privacy Policy - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
+           <Helmet><title>Privacy Policy - MediSense AI</title></Helmet>
            <Header />
            <main>
              <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white py-16">
</file>
