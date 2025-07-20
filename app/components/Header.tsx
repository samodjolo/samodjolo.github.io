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
    <>
      <style jsx>{`
        .theme-toggle {
          position: relative;
          width: 60px;
          height: 32px;
          background: ${darkMode 
            ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' 
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
          };
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: ${darkMode 
            ? 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 8px rgba(59, 130, 246, 0.15)' 
            : 'inset 0 2px 4px rgba(0,0,0,0.1), 0 2px 8px rgba(251, 191, 36, 0.2)'
          };
          overflow: hidden;
        }

        .theme-toggle:hover {
          transform: scale(1.05);
          box-shadow: ${darkMode 
            ? 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(59, 130, 246, 0.25)' 
            : 'inset 0 2px 4px rgba(0,0,0,0.1), 0 4px 12px rgba(251, 191, 36, 0.3)'
          };
        }

        .theme-toggle::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${darkMode 
            ? 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
          };
          border-radius: 50px;
          transition: all 0.4s ease;
        }

        .toggle-circle {
          position: absolute;
          top: 3px;
          left: ${darkMode ? '31px' : '3px'};
          width: 26px;
          height: 26px;
          background: ${darkMode 
            ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)'
          };
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: ${darkMode 
            ? '0 2px 8px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.1)' 
            : '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.3)'
          };
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .sun-icon {
          position: absolute;
          font-size: 14px;
          transform: ${darkMode ? 'scale(0) rotate(180deg)' : 'scale(1) rotate(0deg)'};
          opacity: ${darkMode ? '0' : '1'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .moon-icon {
          position: absolute;
          font-size: 14px;
          transform: ${darkMode ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)'};
          opacity: ${darkMode ? '1' : '0'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: ${darkMode ? '1' : '0'};
          transition: opacity 0.4s ease;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 2s ease-in-out infinite;
        }

        .star:nth-child(1) {
          top: 8px;
          left: 12px;
          animation-delay: 0s;
        }

        .star:nth-child(2) {
          top: 18px;
          left: 8px;
          animation-delay: 0.5s;
        }

        .star:nth-child(3) {
          top: 12px;
          right: 8px;
          animation-delay: 1s;
        }

        .star:nth-child(4) {
          bottom: 8px;
          right: 15px;
          animation-delay: 1.5s;
        }

        .clouds {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: ${darkMode ? '0' : '1'};
          transition: opacity 0.4s ease;
        }

        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50px;
        }

        .cloud:nth-child(1) {
          width: 8px;
          height: 4px;
          top: 8px;
          left: 8px;
          animation: float 3s ease-in-out infinite;
        }

        .cloud:nth-child(2) {
          width: 6px;
          height: 3px;
          bottom: 10px;
          right: 10px;
          animation: float 3s ease-in-out infinite reverse;
          animation-delay: 1s;
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5); 
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateX(0px); 
          }
          50% { 
            transform: translateX(3px); 
          }
        }

        .moon-craters {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: ${darkMode ? '1' : '0'};
          transition: opacity 0.4s ease;
        }

        .crater {
          position: absolute;
          background: rgba(148, 163, 184, 0.3);
          border-radius: 50%;
        }

        .crater:nth-child(1) {
          width: 3px;
          height: 3px;
          top: 6px;
          left: 6px;
        }

        .crater:nth-child(2) {
          width: 2px;
          height: 2px;
          top: 12px;
          right: 8px;
        }

        .crater:nth-child(3) {
          width: 2px;
          height: 2px;
          bottom: 8px;
          left: 10px;
        }
      `}</style>

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
              {/* Custom Smooth Animated Toggle */}
              <div 
                className="theme-toggle"
                onClick={() => dispatch(toggleDarkMode())}
                role="button"
                aria-label="Toggle dark mode"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    dispatch(toggleDarkMode());
                  }
                }}
              >
                {/* Background Stars for Dark Mode */}
                <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                </div>

                {/* Background Clouds for Light Mode */}
                <div className="clouds">
                  <div className="cloud"></div>
                  <div className="cloud"></div>
                </div>

                {/* Toggle Circle with Icons */}
                <div className="toggle-circle">
                  <span className="sun-icon">☀️</span>
                  <span className="moon-icon">🌙</span>
                  
                  {/* Moon Craters */}
                  <div className="moon-craters">
                    <div className="crater"></div>
                    <div className="crater"></div>
                    <div className="crater"></div>
                  </div>
                </div>
              </div>

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
    </>
  );
}