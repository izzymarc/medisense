<file path="src/pages/PrivacyPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
      import { Helmet } from 'react-helmet-async';
      import { Shield, Lock, FileText, Eye } from 'lucide-react';

      export function PrivacyPage() {
        useEffect(() => {
          document.title = "Privacy Policy - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>Privacy Policy - MediSense AI</title></Helmet>
            <Header />
            <main>
              <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
                  <p className="text-lg mb-8 text-center">
                    Your privacy is important to us.
                  </p>
                  <div className="prose prose-lg mx-auto text-gray-100">
                    <p>
                      This Privacy Policy describes how MediSense AI collects, uses, and shares your personal information.
                    </p>
                    <h2>1. Information We Collect</h2>
                    <p>
                      We collect information that you provide directly to us, such as your name, email address, and any health information you choose to share.
                    </p>
                    <h2>2. How We Use Your Information</h2>
                    <p>
                      We use your information to provide the Service, personalize your experience, and communicate with you.
                    </p>
                    <h2>3. Sharing Your Information</h2>
                    <p>
                      We do not share your personal information with third parties except as described in this Privacy Policy.
                    </p>
                    <h2>4. Security</h2>
                    <p>
                      We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                    </p>
                    <h2>5. Your Choices</h2>
                    <p>
                      You can choose not to provide certain information, but this may limit your ability to use the Service.
                    </p>
                    <h2>6. Changes to This Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <h2>7. Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy, please contact us at support@medisense.ai.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
      }
    </file>
