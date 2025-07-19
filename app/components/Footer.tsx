// components/Footer.tsx
'use client';
import { useAppSelector } from '../lib/hooks/redux';

export default function Footer() {
  const { darkMode } = useAppSelector(state => state.theme);
  const { contact } = useAppSelector(state => state.portfolio);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: contact.social.github, 
      icon: '🔗',
      hoverColor: 'hover:text-gray-900 dark:hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      url: contact.social.linkedin, 
      icon: '💼',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      url: contact.social.twitter, 
      icon: '🐦',
      hoverColor: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative overflow-hidden ${
      darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                    Djolo
                  </h3>
                  <p className={`text-lg leading-relaxed mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Full Stack Developer passionate about creating innovative web solutions 
                    that make a difference. Let's build the future together, one line of code at a time.
                  </p>
                </div>

                {/* Social Links */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map(social => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                          darkMode 
                            ? 'bg-gray-800 hover:bg-gray-700' 
                            : 'bg-white hover:bg-gray-100 shadow-md'
                        }`}
                        title={social.name}
                        aria-label={`Follow me on ${social.name}`}
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          {social.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                } backdrop-blur-sm border border-gray-200 dark:border-gray-700`}>
                  <h4 className="font-semibold mb-2">Stay Updated</h4>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Get notified about new projects and blog posts
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className={`flex-1 px-3 py-2 rounded-lg text-sm border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-green-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map(link => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className={`group flex items-center transition-colors hover:text-blue-600 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <span className="w-1 h-1 bg-current rounded-full mr-3 group-hover:w-2 transition-all"></span>
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      } shadow-sm group-hover:shadow-md transition-shadow`}>
                        <span className="text-lg">📧</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Email</p>
                        <a 
                          href={`mailto:${contact.email}`} 
                          className={`text-sm hover:text-blue-600 transition-colors ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      } shadow-sm group-hover:shadow-md transition-shadow`}>
                        <span className="text-lg">📱</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Phone</p>
                        <a 
                          href={`tel:${contact.phone}`} 
                          className={`text-sm hover:text-blue-600 transition-colors ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      } shadow-sm group-hover:shadow-md transition-shadow`}>
                        <span className="text-lg">📍</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Location</p>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {contact.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`py-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  © {currentYear} Djolo. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <button className={`hover:text-blue-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Privacy Policy
                  </button>
                  <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>•</span>
                  <button className={`hover:text-blue-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Terms of Service
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Built with ❤️ using{' '}
                  <span className="font-medium text-blue-600">Next.js</span> &{' '}
                  <span className="font-medium text-green-600">Tailwind CSS</span>
                </p>
                <button
                  onClick={scrollToTop}
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                      : 'bg-white hover:bg-gray-100 text-gray-600 shadow-md'
                  }`}
                  aria-label="Scroll to top"
                >
                  <span className="text-lg">↗️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}