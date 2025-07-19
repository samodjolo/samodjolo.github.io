'use client';
import { useAppSelector } from '../lib/hooks/redux';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { darkMode } = useAppSelector(state => state.theme);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Backend Developer', 'Full Stack Developer', 'Java Specialist', 'Problem Solver'];

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
    <section id="hero" className="min-h-screen pt-25 flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced gradient background */}
        <div className={`absolute inset-0 ${
          darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/30 to-green-900/30' : 'bg-gradient-to-br from-blue-50/40 via-white to-green-50/40'
        }`} />
        
        {/* More floating animated orbs */}
        <div className={`absolute top-1/6 left-1/6 w-40 h-40 rounded-full blur-3xl animate-pulse opacity-40 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-400'
        }`} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        
        <div className={`absolute bottom-1/6 right-1/6 w-48 h-48 rounded-full blur-3xl animate-pulse opacity-30 ${
          darkMode ? 'bg-green-500' : 'bg-green-400'
        }`} style={{ animationDelay: '2s', animationDuration: '5s' }} />
        
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl animate-pulse opacity-35 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-400'
        }`} style={{ animationDelay: '1s', animationDuration: '3s' }} />

        <div className={`absolute top-1/4 right-1/3 w-36 h-36 rounded-full blur-2xl animate-pulse opacity-25 ${
          darkMode ? 'bg-cyan-500' : 'bg-cyan-400'
        }`} style={{ animationDelay: '3s', animationDuration: '6s' }} />

        <div className={`absolute bottom-1/3 left-1/5 w-28 h-28 rounded-full blur-xl animate-pulse opacity-30 ${
          darkMode ? 'bg-pink-500' : 'bg-pink-400'
        }`} style={{ animationDelay: '4s', animationDuration: '4.5s' }} />

        {/* Coffee cups - more visible! */}
        <div className="absolute top-1/5 left-1/6 text-5xl animate-bounce opacity-70 text-yellow-500" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          ☕
        </div>
        <div className="absolute top-3/4 right-1/5 text-4xl animate-bounce opacity-65 text-yellow-400" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
          ☕
        </div>
        <div className="absolute top-2/3 left-3/4 text-3xl animate-bounce opacity-60 text-amber-500" style={{ animationDelay: '3s', animationDuration: '3.5s' }}>
          ☕
        </div>
        <div className="absolute bottom-1/5 left-1/3 text-4xl animate-bounce opacity-70 text-yellow-600" style={{ animationDelay: '0.8s', animationDuration: '4.2s' }}>
          ☕
        </div>
        <div className="absolute top-1/8 right-2/3 text-3xl animate-bounce opacity-55 text-orange-500" style={{ animationDelay: '2.5s', animationDuration: '3.8s' }}>
          ☕
        </div>

        {/* Tech devices - more visible */}
        <div className="absolute top-1/6 right-1/4 text-4xl opacity-70 text-blue-500" style={{ animation: 'floatSlow 8s ease-in-out infinite', animationDelay: '0.5s' }}>
          💻
        </div>
        <div className="absolute bottom-1/4 left-1/8 text-3xl opacity-60 text-slate-600" style={{ animation: 'floatSlow 7s ease-in-out infinite', animationDelay: '2s' }}>
          🖥️
        </div>
        <div className="absolute top-2/5 right-1/8 text-3xl opacity-65 text-blue-600" style={{ animation: 'floatSlow 6s ease-in-out infinite', animationDelay: '1.2s' }}>
          📱
        </div>
        <div className="absolute bottom-2/5 right-2/3 text-4xl opacity-75 text-gray-600" style={{ animation: 'floatSlow 9s ease-in-out infinite', animationDelay: '3.5s' }}>
          ⌨️
        </div>

        {/* More gears and settings - more visible */}
        <div className="absolute bottom-1/3 left-1/4 text-3xl opacity-65 text-green-500" style={{ animation: 'spin 12s linear infinite', animationDelay: '2s' }}>
          ⚙️
        </div>
        <div className="absolute top-1/3 left-4/5 text-2xl opacity-55 text-emerald-500" style={{ animation: 'spin 15s linear infinite', animationDelay: '0s' }}>
          ⚙️
        </div>
        <div className="absolute top-4/5 left-3/5 text-4xl opacity-70 text-teal-500" style={{ animation: 'spin 10s linear infinite', animationDelay: '4s' }}>
          ⚙️
        </div>
        <div className="absolute top-1/8 left-1/2 text-3xl opacity-60 text-green-600" style={{ animation: 'spin 18s linear infinite', animationDelay: '1.5s' }}>
          🔧
        </div>

        {/* Databases and storage - more visible */}
        <div className="absolute top-3/5 right-1/3 text-3xl opacity-65 text-cyan-500" style={{ animation: 'floatSlow 7s ease-in-out infinite', animationDelay: '3s' }}>
          🗄️
        </div>
        <div className="absolute bottom-1/6 right-1/2 text-2xl opacity-55 text-blue-400" style={{ animation: 'floatSlow 6s ease-in-out infinite', animationDelay: '1s' }}>
          💾
        </div>
        <div className="absolute top-1/4 left-1/8 text-3xl opacity-60 text-indigo-500" style={{ animation: 'floatSlow 8s ease-in-out infinite', animationDelay: '2.5s' }}>
          🗃️
        </div>

        {/* Docker and cloud - more visible */}
        <div className="absolute bottom-1/5 right-1/6 text-3xl opacity-65 text-blue-500" style={{ animation: 'floatSlow 9s ease-in-out infinite', animationDelay: '1s' }}>
          🐳
        </div>
        <div className="absolute top-1/3 right-1/5 text-2xl opacity-55 text-sky-500" style={{ animation: 'floatSlow 7s ease-in-out infinite', animationDelay: '3.2s' }}>
          ☁️
        </div>
        <div className="absolute bottom-2/3 left-1/6 text-3xl opacity-60 text-purple-500" style={{ animation: 'floatSlow 8s ease-in-out infinite', animationDelay: '0.8s' }}>
          📦
        </div>

        {/* Code symbols - more visible */}
        <div className="absolute top-1/5 left-1/2 text-3xl opacity-60 font-mono text-green-400" style={{ animation: 'floatSlow 5s ease-in-out infinite', animationDelay: '1.5s' }}>
          {'{ }'}
        </div>
        <div className="absolute bottom-1/5 right-1/2 text-2xl opacity-55 font-mono text-blue-400" style={{ animation: 'floatSlow 4.5s ease-in-out infinite', animationDelay: '2.5s' }}>
          {'< >'}
        </div>
        <div className="absolute top-2/3 left-1/5 text-2xl opacity-50 font-mono text-purple-400" style={{ animation: 'floatSlow 6s ease-in-out infinite', animationDelay: '0.5s' }}>
          {'[ ]'}
        </div>
        <div className="absolute top-1/8 right-1/8 text-3xl opacity-65 font-mono text-cyan-400" style={{ animation: 'floatSlow 7s ease-in-out infinite', animationDelay: '3s' }}>
          {'( )'}
        </div>
        <div className="absolute bottom-1/3 left-2/3 text-2xl opacity-55 font-mono text-orange-400" style={{ animation: 'floatSlow 5.5s ease-in-out infinite', animationDelay: '1.8s' }}>
          {'</>'}
        </div>

        {/* Programming symbols - more visible */}
        <div className="absolute top-1/2 left-1/8 text-3xl opacity-60 text-red-400" style={{ animation: 'floatSlow 8s ease-in-out infinite', animationDelay: '2.2s' }}>
          🔥
        </div>
        <div className="absolute bottom-1/2 right-1/8 text-2xl opacity-55 text-yellow-500" style={{ animation: 'floatSlow 6s ease-in-out infinite', animationDelay: '4s' }}>
          ⚡
        </div>
        <div className="absolute top-3/4 right-3/4 text-3xl opacity-65 text-green-500" style={{ animation: 'floatSlow 7s ease-in-out infinite', animationDelay: '0.3s' }}>
          🚀
        </div>
        <div className="absolute top-1/6 left-3/4 text-2xl opacity-50 text-pink-500" style={{ animation: 'floatSlow 9s ease-in-out infinite', animationDelay: '1.7s' }}>
          💡
        </div>

        {/* Floating particles - more visible */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute w-2 h-2 rounded-full opacity-50 ${
              darkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle overlay for better text readability */}
      <div className={`absolute inset-0 ${
        darkMode ? 'bg-gray-900/40' : 'bg-white/60'
      } backdrop-blur-[0.5px]`}></div>

      {/* Enhanced keyframes for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(90deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
            75% { transform: translateY(-15px) rotate(270deg); }
          }
          
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
            25% { transform: translateY(-20px) translateX(10px) rotate(5deg) scale(1.05); }
            50% { transform: translateY(-35px) translateX(0px) rotate(0deg) scale(1.1); }
            75% { transform: translateY(-20px) translateX(-10px) rotate(-5deg) scale(1.05); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `
      }} />

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
            Passionate backend developer specializing in Java Spring Boot and modern web technologies.
            Building scalable, efficient solutions that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 backdrop-blur-sm ${
                darkMode ? 'hover:bg-blue-600 bg-gray-900/30' : 'bg-white/30'
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* Quick Stats with glass morphism effect */}
          <div className="grid pb-25 grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: '4+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '20+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-4 rounded-xl backdrop-blur-sm border border-white/10 ${
                darkMode ? 'bg-gray-800/30' : 'bg-white/30'
              } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm ${
            darkMode ? 'border-gray-400 bg-gray-900/30' : 'border-gray-600 bg-white/30'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              darkMode ? 'bg-gray-400' : 'bg-gray-600'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}