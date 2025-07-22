'use client';
import { useAppSelector } from '../lib/hooks/redux';

export default function About() {
  const { darkMode } = useAppSelector(state => state.theme);

  const achievements = [
    { icon: '🎯', title: 'Problem Solver', desc: 'Love tackling complex challenges' },
    { icon: '🚀', title: 'Innovation Focused', desc: 'Always exploring new technologies' },
    { icon: '🤝', title: 'Team Player', desc: 'Excellent collaboration skills' },
    { icon: '📚', title: 'Continuous Learner', desc: 'Committed to growth and improvement' }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className={`w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              } relative`}>
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="text-8xl text-white">👨‍💻</div>
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 animate-pulse delay-1000"></div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Djolo
                </span>
                {' '}👋
              </h3>
              
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a backend developer with over 4 years of hands-on experience building server-side applications. 
                My main focus is Node.js development using Express and NestJS frameworks, paired with MySQL databases 
                to create reliable and scalable systems.
              </p>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I love working on complex backend challenges - from designing clean APIs to implementing real-time 
                features with Socket.io. While backend development is where I shine, I also enjoy building complete 
                solutions by working with frontend technologies when needed.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
                  <h4 className="font-semibold text-blue-600 mb-2">Backend (Primary)</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Node.js, Express, NestJS, MySQL
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow`}>
                  <h4 className="font-semibold text-green-600 mb-2">Frontend</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Node.js', 'Express', 'NestJS', 'MySQL', 'Socket.io', 'REST APIs'].map(tech => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-3xl mb-4">{achievement.icon}</div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Fun Facts Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Fun Facts About Me</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: '☕', fact: 'Coffee Lover', detail: '5+ cups per day' },
                { icon: '🎮', fact: 'Gamer', detail: 'Strategy & Action fan' },
                { icon: '📺', fact: 'Series & Anime', detail: 'Always binge-watching' },
                { icon: '🎯', fact: 'Airsoft Player', detail: 'Weekend tactical games' }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold mb-1">{item.fact}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center relative z-10">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-xl`}>
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together!</h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always excited to work on new projects and collaborate with talented people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 overflow-hidden"
                  style={{ 
                    pointerEvents: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    willChange: 'transform'
                  }}
                >
                  <span className="relative z-20 block">Start a Conversation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-green-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`relative px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 ${
                    darkMode ? 'hover:bg-blue-600' : ''
                  }`}
                  style={{ 
                    pointerEvents: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    willChange: 'transform'
                  }}
                >
                  <span className="relative z-20 block">View My Work</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}