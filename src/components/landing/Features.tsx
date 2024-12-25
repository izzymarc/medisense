import React from 'react';
import { 
  Brain, 
  Clock, 
  Shield, 
  Stethoscope, 
  ArrowRight,
  HeartPulse,
  Lock,
  UserCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const primaryFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze your symptoms and provide personalized insights within seconds.'
  },
  {
    icon: HeartPulse,
    title: 'Accurate Results',
    description: 'Built on extensive medical data and validated by healthcare professionals.'
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description: 'Bank-level encryption ensures your health data remains completely confidential.'
  },
  {
    icon: UserCheck,
    title: 'Easy to Use',
    description: 'Simple, intuitive interface designed for everyone, no medical knowledge required.'
  }
];

const secondaryFeatures = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Get health insights anytime, anywhere, without waiting.'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Adheres to strict healthcare privacy and security standards.'
  },
  {
    icon: Stethoscope,
    title: 'Medical Expertise',
    description: 'Developed with leading healthcare professionals.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose MediSense AI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience healthcare guidance powered by cutting-edge technology and medical expertise
          </p>
        </div>
        
        {/* Primary Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {primaryFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-50 rounded-lg w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {secondaryFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 rounded-xl bg-white border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-blue-50 rounded-lg p-3 mr-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            Start Using MediSense AI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-4 text-gray-600">
            No credit card required • Free to get started
          </p>
        </div>
      </div>
    </section>
  );
}
