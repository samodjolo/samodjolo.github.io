'use client';
import { useAppSelector } from '../lib/hooks/redux';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { darkMode } = useAppSelector(state => state.theme);
  const { contact } = useAppSelector(state => state.portfolio);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className={`py-20 relative z-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's work together!</h3>
                <p className={`text-lg leading-relaxed mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-lg`}>
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-lg`}>
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-lg`}>
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {contact.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-semibold mb-4">Follow me on</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', url: contact.social.github, icon: '🔗' },
                    { name: 'LinkedIn', url: contact.social.linkedin, icon: '💼' },
                    { name: 'Twitter', url: contact.social.twitter, icon: '🐦' }
                  ].map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer ${
                        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
                      } shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-xl shadow-lg relative z-30 ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`} style={{ pointerEvents: 'auto' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors cursor-text ${
                        darkMode 
                          ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Your name"
                      style={{ pointerEvents: 'auto', cursor: 'text' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors cursor-text ${
                        darkMode 
                          ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="your.email@example.com"
                      style={{ pointerEvents: 'auto', cursor: 'text' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors cursor-text ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Project discussion"
                    style={{ pointerEvents: 'auto', cursor: 'text' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none cursor-text ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Tell me about your project or just say hello!"
                    style={{ pointerEvents: 'auto', cursor: 'text' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105 cursor-pointer'
                  } text-white shadow-lg hover:shadow-xl`}
                  style={{ pointerEvents: 'auto' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}