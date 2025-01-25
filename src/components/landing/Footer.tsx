import React from 'react';
import { Activity } from 'lucide-react';

const footerSections = {
  Product: ['Features', 'Pricing', 'Security', 'Updates'],
  Company: ['About', 'Careers', 'Contact', 'Partners'],
  Resources: ['Documentation', 'Support', 'API', 'Community']
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">MediSense AI</span>
            </div>
            <p className="text-sm text-gray-400">
              Advanced AI-powered healthcare insights for everyone.
            </p>
          </div>
          
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-white mb-4">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href={`/${link.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Navigating to: /${link.toLowerCase()}`);
                      }}
                    >
                      {link}
                    </a>
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
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Navigating to: /${link.toLowerCase()}`);
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}