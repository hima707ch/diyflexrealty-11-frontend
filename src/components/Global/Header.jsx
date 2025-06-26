import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', route: '/' },
    { name: 'Property List', route: '/propertylistpage' },
    { name: 'Property Detail', route: '/propertydetailpage' },
    { name: 'User Login', route: '/userloginpage' },
    { name: 'User Register', route: '/userregisterpage' },
    { name: 'User Dashboard', route: '/userdashboardpage' },
    { name: 'Add Property', route: '/addpropertypage' },
    { name: 'Edit Property', route: '/editpropertypage' }
  ];

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div id="Header_2" className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={images[0]} alt="Logo" className="h-10 w-auto" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RealEstate</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                id={`Header_${index + 3}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${location.pathname === link.route ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              id="Header_11"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="Header_12" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.route}
                  id={`Header_${index + 13}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${location.pathname === link.route ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;