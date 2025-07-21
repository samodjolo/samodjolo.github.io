'use client';
import { useAppSelector } from '../lib/hooks/redux';
import { useState } from 'react';

export default function Projects() {
  const { darkMode } = useAppSelector(state => state.theme);
  const { projects, contact } = useAppSelector(state => state.portfolio);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const handleDemoRequest = (projectTitle: string) => {
    const subject = `Demo Request for ${projectTitle}`;
    const body = `Hi,

I would like to request a demo for the ${projectTitle} project. Please let me know when would be a good time to schedule a demonstration.

Thank you!`;
    
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className={`flex space-x-2 p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            {(['all', 'featured'] as const).map(filterType => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterType
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {filterType === 'all' ? 'All Projects' : 'Featured'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <div className="text-4xl text-white">🚀</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links - Show on Hover */}
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-gray-900/80 text-white rounded-lg text-sm hover:bg-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <button
                    onClick={() => handleDemoRequest(project.title)}
                    className="inline-flex items-center px-3 py-1 bg-blue-600/80 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                  >
                    Demo
                  </button>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2 py-1 bg-yellow-500 text-black rounded-full text-xs font-medium">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-2 px-4 rounded-lg border transition-colors ${
                      darkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Code
                  </a>
                  <button
                    onClick={() => handleDemoRequest(project.title)}
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-colors"
                  >
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Want to see more? Check out my GitHub for additional projects!
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}