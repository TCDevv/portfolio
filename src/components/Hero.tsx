import { personalInfo } from "../data/portfolio";
import AvatarSimple from "./AvatarSimple";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark via-dark to-dark-light"
    >
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Avatar */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <AvatarSimple />
          </div>

          {/* Right side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {personalInfo.name}
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gradient font-semibold mb-6">
              {personalInfo.title}
            </p>

            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-md font-semibold text-lg hover:opacity-90 transition-opacity duration-150"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-md font-semibold text-lg hover:bg-primary hover:text-white transition-colors duration-150"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Mouse icon with arrow */}
        <a
          href="#about"
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 group"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-primary/70 group-hover:border-secondary rounded-full flex justify-center pt-2 transition-colors duration-200">
              <div className="w-1 h-2 bg-primary/70 group-hover:bg-secondary rounded-full animate-bounce"></div>
            </div>
            <svg
              className="w-4 h-4 text-primary/70 group-hover:text-secondary transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
