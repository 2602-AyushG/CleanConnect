import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'My Profile', href: '/profile' },
    { name: 'Check Drive Status', href: '/drive-status' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-display font-bold text-white">🧼 CleanDrive</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive(item.href)
                    ? 'text-black bg-white shadow-lg'
                    : 'text-white hover:text-black hover:bg-white hover:shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Auth Button */}
            <Link
              to="/login"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300"
            >
              Login / Sign Up
            </Link>

            {/* Notification Bell */}
            <button className="p-2 text-white hover:text-gray-300 relative transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-gray-800 rounded-md">
              <BellIcon className="h-7 w-7" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-white transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-7 w-7" />
              ) : (
                <Bars3Icon className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive(item.href)
                    ? 'text-black bg-white shadow-lg'
                    : 'text-white hover:text-black hover:bg-white hover:shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-all duration-300"
            >
              Login / Sign Up
            </Link>
            <button className="flex items-center px-3 py-2 text-white text-lg hover:text-gray-300 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-gray-800 rounded-md">
              <BellIcon className="h-6 w-6 mr-2" />
              Notifications
              <span className="ml-2 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 
