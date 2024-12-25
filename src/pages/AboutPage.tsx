import React from 'react';
import { Header } from '../components/Header';
import { Brain, Users, Shield, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              About MediSense AI
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-blue-100">
              Revolutionizing healthcare through artificial intelligence and making medical insights accessible to everyone.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At MediSense AI, we believe that everyone deserves access to quick, reliable health insights. Our mission is to combine cutting-edge artificial intelligence with medical expertise to provide preliminary health guidance when you need it most.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Brain className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI Technology</h3>
                  <p className="text-gray-600">
                    Powered by advanced machine learning algorithms trained on vast medical datasets.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Users className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Backed</h3>
                  <p className="text-gray-600">
                    Developed in collaboration with healthcare professionals and medical experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  Your health data is encrypted and protected with the highest security standards.
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">
                  Committed to providing accurate, reliable health insights.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  Making healthcare guidance available to everyone, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
