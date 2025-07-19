'use client';
import { useAppSelector } from '../lib/hooks/redux';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { darkMode } = useAppSelector(state => state.theme);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'Frontend Specialist', 'TypeScript Expert', 'Problem Solver'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className={`text-lg md:text-xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            👋 Hello, I'm
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Djolo
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center">
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a{' '}
              <span className="text-blue-600 font-semibold">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </div>

          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Passionate about creating beautiful, functional, and user-friendly applications
            that solve real-world problems. Let's build something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 ${
                darkMode ? 'hover:bg-blue-600' : ''
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '20+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-4 rounded-lg ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/50'
              } backdrop-blur-sm`}>
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
      </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? 'border-gray-400' : 'border-gray-600'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              darkMode ? 'bg-gray-400' : 'bg-gray-600'
            }`}></div>
          </div>
        </div>
    </section>
  );
}