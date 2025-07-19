'use client';
import { useAppSelector } from '../lib/hooks/redux';
import { useEffect, useState } from 'react';

export default function Skills() {
  const { darkMode } = useAppSelector(state => state.theme);
  const { skills } = useAppSelector(state => state.portfolio);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((skill) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, Math.random() * 1000);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [skills]);

  const getSkillColor = (level: number): string => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const skillCategories = {
    'Backend': ['Java', 'Spring Boot', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    'Frontend': ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Redux'],
    'DevOps & Tools': ['Docker', 'Kubernetes', 'Jenkins', 'Ollama', 'Linux', 'Networking']
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          {/* Skills by Category */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div
                key={category}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map(skillName => {
                    const skill = skills.find(s => s.name === skillName);
                    if (!skill) return null;

                    const animatedLevel = animatedSkills[skill.name] || 0;
                    
                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className={`text-sm font-semibold ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {animatedLevel}%
                          </span>
                        </div>
                        <div className={`w-full rounded-full h-2 ${
                          darkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                            style={{ width: `${animatedLevel}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills as Tags */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Other Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Git', 'GitHub', 'VS Code', 'Postman', 'AWS', 'Vercel', 
                'Firebase', 'Jest', 'WebPack', 'Vite', 'REST APIs', 'Microservices'
              ].map(tech => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } shadow-lg hover:shadow-xl`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className={`mt-16 p-8 rounded-xl ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-lg text-center`}>
            <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always exploring new technologies and improving my skills
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Go (Golang)', 'Advanced Kubernetes', 'Machine Learning', 'Cloud Architecture'].map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}