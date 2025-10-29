import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full hidden md:block ${
                  index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content card */}
              <div
                className={`bg-dark-light p-6 md:p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors duration-150 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    <span className="text-gray-400 text-sm font-mono">{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <svg
                        className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
