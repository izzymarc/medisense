import React from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerSections = {
  Product: [
    { name: 'Features', path: '/#features' },
    { name: 'Security', path: '/privacy' },
    { name: 'Terms', path: '/terms' }
  ],
  Company: [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ],
  Resources: [
    { name: 'Support', path: '/contact' },
    { name: 'Privacy', path: '/privacy' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">MediSense AI</span>
            </Link>
            <p className="text-sm text-gray-400">
              Advanced AI-powered healthcare insights for everyone.
            </p>
          </div>
          
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-white mb-4">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {new Date().getFullYear()} MediSense AI. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
