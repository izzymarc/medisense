import React from 'react';
    import { Header } from '../components/Header';
    import { NavLink } from '../components/NavLink';

    export function PartnersPage() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
            <p className="text-xl text-gray-600 mb-8">
              We collaborate with leading organizations to bring you the best in healthcare technology.
            </p>
            <div className="prose prose-lg mx-auto">
              <p>
                MediSense AI is proud to partner with the following organizations:
              </p>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://via.placeholder.com/80x80.png?text=HCP"
                      alt="Healthcare Provider Logo"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">Healthcare Providers</h3>
                      <p className="text-gray-600">
                        We work with leading hospitals and clinics to ensure our AI models are accurate and reliable.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://via.placeholder.com/80x80.png?text=Tech"
                      alt="Technology Company Logo"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">Technology Companies</h3>
                      <p className="text-gray-600">
                        Our technology partners provide the infrastructure and tools to power our AI solutions.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://via.placeholder.com/80x80.png?text=RI"
                      alt="Research Institution Logo"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">Research Institutions</h3>
                      <p className="text-gray-600">
                        We collaborate with research institutions to advance the field of AI in healthcare.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <p className="mt-8">
                Interested in partnering with us? <NavLink to="/contact">Contact us</NavLink> to learn more.
              </p>
            </div>
          </main>
        </div>
      );
    }
