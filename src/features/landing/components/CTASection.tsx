import React from 'react';
    import { ArrowRight } from 'lucide-react';
    import { NavLink } from '../../../components/NavLink';

    export function CTASection() {
      return (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust MediSense AI for their health insights
            </p>
            <NavLink to="/register" variant="button" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Try MediSense AI Now
              <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      );
    }
