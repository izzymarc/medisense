<file path="src/pages/PrivacyPage.tsx">
      import React, { useEffect } from 'react';
      import { Header } from '../components/Header';
      import { Shield, Lock, FileText, Eye } from 'lucide-react';

      export function PrivacyPage() {
        useEffect(() => {
          document.title = "Privacy Policy - MediSense AI";
        }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white py-16">
                <div className="container mx-auto px-4">
                  <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
                  <p className="text-center text-blue-100 max-w-2xl mx-auto">
                    We take your privacy seriously. Learn how we collect, use, and protect your personal information.
                  </p>
                </div>
              </div>

              <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
                  <div className="space-y-12">
                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-6 w-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold">Data Protection</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Your health data is encrypted using industry-standard protocols. We employ multiple layers of security to ensure your information remains private and secure.
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <Lock className="h-6 w-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold">Information Collection</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        We collect only the information necessary to provide you with accurate health insights:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Symptoms and health concerns you report</li>
                        <li>Basic demographic information</li>
                        <li>Account information for authentication</li>
                      </ul>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-6 w-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold">Data Usage</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Your data is used to:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Provide personalized health insights</li>
                        <li>Improve our AI algorithms</li>
                        <li>Enhance user experience</li>
                      </ul>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="h-6 w-6 text-blue-600" />
                        <h2 className="text-2xl font-semibold">Your Rights</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        You have the right to:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Access your personal data</li>
                        <li>Request data deletion</li>
                        <li>Opt out of data collection</li>
                        <li>Export your data</li>
                      </ul>
                    </section>
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Last updated: March 2024
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
      }
    </file>
