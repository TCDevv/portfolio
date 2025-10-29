import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEnhanced from './components/AboutEnhanced';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ParticlesLight from './components/ParticlesLight';
import CustomCursor from './components/CustomCursor';

function App() {

  return (
    <div className="min-h-screen bg-dark text-white relative dark:bg-dark dark:text-white">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Lightweight Effects */}
      <ParticlesLight />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutEnhanced />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
