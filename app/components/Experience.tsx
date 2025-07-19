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

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Education
            </h3>
            <div className={`p-6 rounded-xl shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="text-center">
                <h4 className="text-xl font-bold text-blue-600 mb-2">
                  Bachelor's Degree in Computer Science
                </h4>
                <p className="text-lg font-semibold mb-2">University Name</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  2015 - 2019 | GPA: 3.8/4.0
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'AWS Certified Developer',
                'Java Spring Professional',
                'React Advanced Certification',
                'TypeScript Expert'
              ].map((cert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 border-dashed transition-colors ${
                    darkMode 
                      ? 'border-gray-600 hover:border-blue-500' 
                      : 'border-gray-300 hover:border-blue-500'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏆</div>
                    <p className="font-medium">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}