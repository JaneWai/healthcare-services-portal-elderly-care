import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ElderCare Connect</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden sm:flex sm:space-x-8 sm:items-center">
            <Link to="/" className="text-gray-600 hover:text-rose-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/provider-registration" className="text-gray-600 hover:text-rose-600 px-3 py-2 text-sm font-medium">
              Become a Provider
            </Link>
            <Link to="/book-service" className="bg-rose-600 text-white hover:bg-rose-700 px-4 py-2 rounded-md text-sm font-medium">
              Book a Service
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-rose-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/provider-registration" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-rose-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Provider
            </Link>
            <Link 
              to="/book-service" 
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-rose-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
