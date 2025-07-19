'use client';
import { useAppDispatch, useAppSelector } from '../lib/hooks/redux';
import { toggleDarkMode } from '../lib/store/themeSlice';
import { useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
}

export default function Header() {
  const { darkMode, activeSection } = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
    } shadow-lg`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Djolo's Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 transition-colors duration-300 hover:text-blue-600 group ${
                  activeSection === item.id ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item.label}
                {/* Underline effect */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2 pt-4">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-left py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 group ${
                    activeSection === item.id ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {/* Mobile underline effect */}
                  <span className={`absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:w-6 ${
                    activeSection === item.id ? 'w-6' : ''
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}