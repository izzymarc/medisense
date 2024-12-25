import React from 'react';
import { Header } from '../components/Header';
import { FileText, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>
            <p className="text-center text-blue-100 max-w-2xl mx-auto">
              Please read these terms carefully before using MediSense AI.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold">Important Notice</h2>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-gray-600">
                  MediSense AI is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with questions about your medical condition.
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold">Service Description</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  MediSense AI provides AI-powered health insights and preliminary guidance based on reported symptoms. Our service is designed to help users better understand their health concerns and determine appropriate next steps.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold">User Responsibilities</h2>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate information about symptoms and health conditions</li>
                  <li>Use the service responsibly and not for emergency medical situations</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold">Limitations</h2>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Not for use in medical emergencies</li>
                  <li>AI insights are preliminary and not definitive medical diagnoses</li>
                  <li>Service availability may vary by region</li>
                  <li>Features may change without notice</li>
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
