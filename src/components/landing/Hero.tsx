import { Activity, Shield, Sparkles } from 'lucide-react';
    import { NavLink } from '../NavLink';

    export function Hero() {
      return (
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-semibold text-blue-600">MediSense AI</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Your Personal AI Health Assistant
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Get instant medical insights powered by advanced AI technology. Fast, reliable, and accessible healthcare guidance when you need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <NavLink to="/register" variant="button" className="btn-primary inline-flex items-center gap-2">
                    Get Started
                  </NavLink>
                  <NavLink to="/about" variant="button" className="btn-secondary">
                    Learn More
                  </NavLink>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                  alt="Medical professional using tablet"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-10 w-10 text-blue-600" />
                    <div>
                      <div className="font-semibold">AI-Powered</div>
                      <div className="text-sm text-gray-600">Advanced Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
