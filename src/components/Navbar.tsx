import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          <span className="text-gradient">CT</span>
        </a>

        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`hover:text-primary ${
                  activeSection === item.href.slice(1) ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden md:block px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-150 rounded-md font-medium"
          >
            Contact Me
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-md border-t border-gray-800">
          <ul className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 hover:text-primary ${
                    activeSection === item.href.slice(1) ? 'text-primary' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block w-full px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-150 rounded-md font-medium text-center"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
