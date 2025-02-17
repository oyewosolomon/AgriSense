import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: "Products",
      dropdownItems: [
        "Satellite Imaging",
        "Soil Sensors",
        "Weather Integration",
        "Analytics Platform"
      ]
    },
    {
      label: "Solutions",
      dropdownItems: [
        "For Farmers",
        "For Agronomists",
        "For Enterprises"
      ]
    },
    { label: "Resources" },
    { label: "About Us" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-green-600">AgriSense</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 font-medium transition-colors">
                  <span>{item.label}</span>
                  {item.dropdownItems && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {item.dropdownItems && (
                  <div className="absolute top-full left-0 transform -translate-x-1/4 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2">
                      {item.dropdownItems.map((dropdownItem, dIndex) => (
                        <a
                          key={dIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-green-600 font-medium hover:text-green-700 transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white shadow-lg px-4 pt-2 pb-4">
          {navItems.map((item, index) => (
            <div key={index} className="py-2">
              <button className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors">
                <span>{item.label}</span>
                {item.dropdownItems && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {item.dropdownItems && (
                <div className="mt-2 space-y-1">
                  {item.dropdownItems.map((dropdownItem, dIndex) => (
                    <a
                      key={dIndex}
                      href="#"
                      className="block px-8 py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                                            {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="block w-full text-left px-4 py-2 text-gray-600 hover:text-green-600 transition-colors">
            Log In
          </button>
          <button className="block w-full text-left px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
