'use client';
import { useAppSelector } from '../lib/hooks/redux';
import { useState } from 'react';

export default function Projects() {
  const { darkMode } = useAppSelector(state => state.theme);
  const { projects, contact } = useAppSelector(state => state.portfolio);
  const [filter, setFilter] = useState<'all' | 'featured' | 'github'>('all');

  const filteredProjects = () => {
    switch (filter) {
      case 'featured':
        return projects.filter(project => project.featured);
      case 'github':
        return projects.filter(project => project.github.includes('samodjolo'));
      default:
        return projects;
    }
  };

  const handleDemoRequest = (projectTitle: string) => {
    const subject = `Demo Request for ${projectTitle}`;
    const body = `Hi Djolo,

I would like to request a demo for the ${projectTitle} project. Please let me know when would be a good time to schedule a demonstration.

Thank you!`;
    
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const getTechBadgeColor = (tech: string): string => {
    const techColors: { [key: string]: string } = {
      'TypeScript': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'React': 'bg-cyan-500',
      'Angular': 'bg-red-500',
      'Next.js': 'bg-gray-800',
      'Node.js': 'bg-green-600',
      'Java': 'bg-orange-600',
      'Spring Boot': 'bg-green-700',
      'PostgreSQL': 'bg-blue-700',
      'MySQL': 'bg-blue-800',
      'Docker': 'bg-blue-600',
      'REST API Integration': 'bg-indigo-600',
      'NestJS': 'bg-red-600',
      'JWT': 'bg-indigo-500',
      'Redux': 'bg-purple-600',
      'Tailwind CSS': 'bg-teal-500',
      'SCSS': 'bg-pink-500',
      'Socket.io': 'bg-black',
      'Cron Jobs': 'bg-orange-700',
      'Payment API': 'bg-emerald-600',
      'Security': 'bg-red-600'
    };
    return techColors[tech] || 'bg-gray-500';
  };

  const getProjectIcon = (title: string): string => {
    if (title.toLowerCase().includes('cms') || title.toLowerCase().includes('content')) return '📝';
    if (title.toLowerCase().includes('book store') && title.toLowerCase().includes('angular')) return '📚';
    if (title.toLowerCase().includes('book store') && title.toLowerCase().includes('backend')) return '📖';
    if (title.toLowerCase().includes('angular') || title.toLowerCase().includes('frontend')) return '🎨';
    if (title.toLowerCase().includes('backend') || title.toLowerCase().includes('api')) return '⚙️';
    if (title.toLowerCase().includes('portfolio') || title.toLowerCase().includes('website')) return '🌐';
    return '🚀';
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          My Projects
        </h2>
        
        <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Here's a collection of projects I've worked on, including a complete full-stack book store application 
          with separate frontend and backend repositories, plus other projects demonstrating my development skills.
        </p>


        {/* GitHub Stats Banner */}
        <div className={`mb-12 p-6 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        } border-2 border-dashed border-blue-500/30`}>
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-4xl">👨‍💻</span>
              <div>
                <h3 className="text-xl font-bold">GitHub Profile</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Check out my repositories and contributions
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                <span className="font-semibold text-blue-600">{projects.filter(p => p.github.includes('samodjolo')).length}+</span>
                <span className={`ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Public Repos</span>
              </div>
              <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                <span className="font-semibold text-green-600">4+</span>
                <span className={`ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Years Experience</span>
              </div>
              <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                <span className="font-semibold text-purple-600">Multiple</span>
                <span className={`ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tech Stacks</span>
              </div>
            </div>
            <a
              href="https://github.com/samodjolo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span>🔗</span>
              <span>Visit GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects().map(project => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } border border-gray-200 dark:border-gray-700`}
            >
              {/* Project Header */}
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 flex items-center justify-center relative">
                  <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {getProjectIcon(project.title)}
                  </div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links - Show on Hover */}
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-gray-900/90 text-white rounded-lg text-sm hover:bg-gray-900 transition-colors backdrop-blur-sm"
                  >
                    <span className="mr-1">📂</span>
                    GitHub
                  </a>
                  {project.demo !== "Request Demo" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-blue-600/90 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors backdrop-blur-sm"
                    >
                      <span className="mr-1">🌐</span>
                      Live
                    </a>
                  ) : (
                    <button
                      onClick={() => handleDemoRequest(project.title)}
                      className="inline-flex items-center px-3 py-1 bg-blue-600/90 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors backdrop-blur-sm"
                    >
                      <span className="mr-1">📧</span>
                      Demo
                    </button>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-bold shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* GitHub Repository Badge */}
                {project.github.includes('samodjolo') && (
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-gray-900/80 text-white rounded-full text-xs font-medium backdrop-blur-sm">
                      📂 GitHub Repo
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-3 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2 text-gray-500 dark:text-gray-400">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm hover:scale-105 transition-transform ${getTechBadgeColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-3 px-4 rounded-lg border-2 transition-all duration-300 font-medium ${
                      darkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    } hover:scale-105`}
                  >
                    <span className="mr-2">📂</span>
                    View Code
                  </a>
                  {project.demo !== "Request Demo" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg"
                    >
                      <span className="mr-2">🌐</span>
                      Live Demo
                    </a>
                  ) : (
                    <button
                      onClick={() => handleDemoRequest(project.title)}
                      className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 font-medium hover:scale-105 shadow-lg"
                    >
                      <span className="mr-2">📧</span>
                      Request Demo
                    </button>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-2 border-dashed border-green-500/30`}>
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className={`text-lg mb-6 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Whether you need a full-stack application, backend API, or technical consultation, let's discuss how I can help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/samodjolo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">🔗</span>
                View All GitHub Projects
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">💬</span>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}