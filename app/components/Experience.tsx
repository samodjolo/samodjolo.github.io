// components/Experience.tsx
'use client';
import { useAppSelector } from '../lib/hooks/redux';

export default function Experience() {
  const { darkMode } = useAppSelector(state => state.theme);
  const { experiences } = useAppSelector(state => state.portfolio);

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    darkMode ? 'bg-gray-900 border-blue-500' : 'bg-white border-blue-500'
                  } z-10`}></div>

                  {/* Content */}
                  <div className={`ml-20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-50'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-600">
                          {experience.position}
                        </h3>
                        <h4 className="text-lg font-semibold">
                          {experience.company}
                        </h4>
                      </div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'
                      }`}>
                        {experience.duration}
                      </span>
                    </div>
                    <p className={`leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Achievements Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Professional Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Teaching Achievement */}
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border-2 border-purple-500`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">👨‍🏫</div>
                  <h4 className="font-bold text-purple-600 mb-2">Teaching Excellence</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Successfully taught 50+ students programming and mathematics
                  </p>
                </div>
              </div>

              {/* Hackathon Achievement */}
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border-2 border-orange-500`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-bold text-orange-600 mb-2">Hackathon Success</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Developed complete CMS platform in hackathon environment
                  </p>
                </div>
              </div>

              {/* Industry Experience */}
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border-2 border-blue-500`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">🎮</div>
                  <h4 className="font-bold text-blue-600 mb-2">iGaming Expertise</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    2+ years experience in regulated gaming industry
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Education
            </h3>
            
            <div className="space-y-6">
              {/* Current University */}
              <div className={`p-6 rounded-xl shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } border-2 border-blue-500`}>
                <div className="text-center">
                  <span className="inline-flex items-center mb-3 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                    📚 Currently Studying
                  </span>
                  <h4 className="text-xl font-bold text-blue-600 mb-2">
                    Bachelor's Degree in Computer Science
                  </h4>
                  <p className="text-lg font-semibold mb-2">Singidunum University, Belgrade</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    2020 - 2025 (Expected)
                  </p>
                </div>
              </div>

              {/* High School */}
              <div className={`p-6 rounded-xl shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <div className="text-center">
                  <span className="inline-flex items-center mb-3 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm font-medium">
                    ✓ Completed
                  </span>
                  <h4 className="text-xl font-bold text-green-600 mb-2">
                    High School Diploma
                  </h4>
                  <p className="text-lg font-semibold mb-2">ETS Rade Končar, Belgrade</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    2016 - 2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Language Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Certifications & Language Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Current Certification */}
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border-2 border-green-500`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">🏆</div>
                  <h4 className="font-bold text-green-600 mb-2">English B2 Certificate</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Upper-Intermediate Level
                  </p>
                  <span className="inline-flex items-center mt-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-xs font-medium">
                    ✓ Certified
                  </span>
                </div>
              </div>

              {/* Completed Course */}
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border-2 border-blue-500`}>
                <div className="text-center">
                  <div className="text-3xl mb-3">🎓</div>
                  <h4 className="font-bold text-blue-600 mb-2">English C1 Course</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Advanced Level
                  </p>
                  <span className="inline-flex items-center mt-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
                    ✓ Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Future Goals */}
            <div className="mt-8 text-center">
              <h4 className="font-semibold mb-4 text-lg">Professional Development Goals</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'English C1 Certification',
                  'AWS Solutions Architect',
                  'Java Spring Professional',
                  'Advanced iGaming Platforms',
                  'Enterprise CMS Development',
                  'Technical Team Leadership'
                ].map((goal, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } shadow-sm hover:shadow-md`}
                  >
                    🎯 {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}