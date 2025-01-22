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
                      MediSense AI provides an AI-powered healthcare assistant that offers real-time symptom analysis and personalized medical insights. The Service is intended for informational purposes only and does not provide medical advice.
                    </p>
                    <h2>3. User Responsibilities</h2>
                    <p>
                      You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account and password.
                    </p>
                    <h2>4. Privacy</h2>
                    <p>
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service.
                    </p>
                    <h2>5. Intellectual Property</h2>
                    <p>
                      The Service and its original content, features, and functionality are owned by MediSense AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                    <h2>6. Disclaimer of Warranties</h2>
                    <p>
                      The Service is provided on an "as is" and "as available" basis. MediSense AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                    <h2>7. Limitation of Liability</h2>
                    <p>
                      In no event shall MediSense AI be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Service, even if MediSense AI or a MediSense AI authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>
                    <h2>8. Governing Law</h2>
                    <p>
                      These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which MediSense AI is based, without regard to its conflict of law provisions.
                    </p>
                    <h2>9. Changes to Terms</h2>
                    <p>
                      MediSense AI reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>
                    <h2>10. Contact Us</h2>
                    <p>
                      If you have any questions about these Terms, please contact us at support@medisense.ai.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
      }
    </file>
