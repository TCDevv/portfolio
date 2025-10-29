import { useState } from 'react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-dark-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my expertise in fullstack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark rounded-xl border border-gray-800 overflow-hidden hover:border-primary transition-colors duration-150"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    {project.name}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                    {project.period}
                  </span>
                </div>
                <p className="text-primary font-semibold mb-2">{project.company}</p>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Team: {project.teamSize}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-800">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities - Expandable */}
              <div className="p-6">
                <button
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Key Responsibilities
                  </h4>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      selectedProject === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedProject === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-2 mt-2">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-secondary mt-1">▹</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
