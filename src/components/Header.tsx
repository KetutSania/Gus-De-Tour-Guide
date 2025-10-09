import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className={`h-8 w-8 ${isScrolled ? 'text-orange-500' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Bali Tour Guide
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-lg">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-500 text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-orange-500 text-left">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 text-left">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;