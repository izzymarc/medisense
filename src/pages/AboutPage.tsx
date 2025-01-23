import React from 'react';
    import { Header } from '../components/Header';
    import { Activity, Heart, Shield, Users } from 'lucide-react';

    export function AboutPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-8">About MediSense AI</h1>
              
              <div className="prose prose-lg mx-auto">
                <p className="text-xl text-gray-600 mb-8 text-center">
                  MediSense AI combines advanced artificial intelligence with medical expertise 
                  to provide reliable health insights and guidance.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    {
                      icon: Activity,
                      title: 'Advanced AI Technology',
                      description: 'Powered by state-of-the-art machine learning models trained on medical data'
                    },
                    {
                      icon: Shield,
                      title: 'Privacy First',
                      description: 'Your health data is encrypted and protected with enterprise-grade security'
                    },
                    {
                      icon: Users,
                      title: 'Expert Backed',
                      description: 'Developed in collaboration with healthcare professionals'
                    },
                    {
                      icon: Heart,
                      title: 'User Focused',
                      description: 'Designed to provide clear, actionable health insights'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <item.icon className="h-8 w-8 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-8 rounded-xl mb-12">
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-gray-700">
                    We believe that everyone should have access to reliable health information
                    and guidance. Our mission is to make preliminary health assessment more
                    accessible while ensuring users get professional medical care when needed.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
