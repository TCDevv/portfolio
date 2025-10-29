import { skills, achievements, summary, personalInfo } from '../data/portfolio';

const AboutEnhanced = () => {
  return (
    <section id="about" className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark p-8 rounded-xl border border-gray-800 text-center hover:border-primary transition-colors duration-150">
              <div className="text-5xl font-bold text-gradient mb-2">
                {personalInfo.yearsOfExperience}+
              </div>
              <p className="text-gray-400 font-medium">Years Experience</p>
            </div>
            <div className="bg-dark p-8 rounded-xl border border-gray-800 text-center hover:border-primary transition-colors duration-150">
              <div className="text-5xl font-bold text-gradient mb-2">
                {personalInfo.projectsCompleted}+
              </div>
              <p className="text-gray-400 font-medium">Projects Completed</p>
            </div>
            <div className="bg-dark p-8 rounded-xl border border-gray-800 text-center hover:border-primary transition-colors duration-150">
              <div className="text-5xl font-bold text-gradient mb-2">
                {personalInfo.happyClients}+
              </div>
              <p className="text-gray-400 font-medium">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-20">
          <div className="bg-dark p-8 md:p-12 rounded-2xl border border-gray-800">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {summary.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {summary.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed">
              {summary.bio}
            </p>
          </div>
        </div>

        {/* Skills Section with Logos */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors duration-150">
                  {/* Logo */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Skill name */}
                  <p className="text-center text-white font-medium">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Key <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-dark p-8 rounded-xl border border-gray-800 hover:border-primary transition-colors duration-150"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white relative z-10">{achievement.title}</h4>
                <p className="text-gray-400 leading-relaxed relative z-10">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEnhanced;
