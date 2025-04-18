import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="ml-2 text-lg font-bold">ElderCare Connect</span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Connecting elderly patients with reliable healthcare transportation and companion services.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/provider-registration" className="text-gray-300 hover:text-white text-sm">
                  Become a Provider
                </a>
              </li>
              <li>
                <a href="/book-service" className="text-gray-300 hover:text-white text-sm">
                  Book a Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@eldercareconnect.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ElderCare Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
