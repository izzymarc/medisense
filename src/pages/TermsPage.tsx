<file path="src/pages/TermsPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
      import { Helmet } from 'react-helmet-async';
      import { Shield, Lock, FileText, Eye } from 'lucide-react';

      export function TermsPage() {
        useEffect(() => {
          document.title = "Terms of Service - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Terms of Service - MediSense AI</title></Helmet>
            <Header />
            <main>
              <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
                  <p className="text-lg mb-8 text-center">
                    Please read these terms carefully before using MediSense AI.
                  </p>
                  <div className="prose prose-lg mx-auto text-gray-100">
                    <p>
                      By accessing or using MediSense AI, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                    </p>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                      These Terms of Service ("Terms") govern your use of the MediSense AI website and services ("Service"). By accessing or using the Service, you agree to be bound by these Terms.
                    </p>
                    <h2>2. Description of Service</h2>
                    <p>
                      MediSense AI provides an AI-powered healthcare assistant that offers real-
