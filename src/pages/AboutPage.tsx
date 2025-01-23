import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Activity, Heart, Shield, Users } from 'lucide-react';

    export function AboutPage() {
    useEffect(() => {
        document.title = "About MediSense AI";
        return () => {
        document.title = "MediSense AI";
        };
    }, []);
        return (
          <div className="min-h-screen bg-gray-50">
            <Helmet><title>About Us - MediSense AI</title></Helmet>
            <Header />
            <main className="container mx-auto px-4 py-16">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About MediSense AI</h1>
                <p className="text-xl text-gray-600 mb-8">
                  MediSense AI is an advanced healthcare assistant that provides real-time symptom analysis and personalized medical insights.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Activity className="h-10 w-10 text-blue-600" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                      <p className="text-gray-600">To make healthcare guidance accessible to everyone, especially in underserved areas.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Heart className="h-10 w-10 text-red-500" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Our Values</h3>
                      <p className="text-gray-600">We are committed to providing accurate, reliable, and secure health information.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Shield className="h-10 w-10 text-green-500" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Privacy & Security</h3>
                      <p className="text-gray-600">We prioritize the privacy and security of your health data.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="h-10 w-10 text-yellow-500" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">Our Team</h3>
                      <p className="text-gray-600">Our team consists of experienced developers and healthcare professionals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
    }
