import Navbar from './Sections/Navbar.jsx';
import Hero from './Sections/Hero.jsx';
import About from './Sections/About.jsx';
import Contact from './Sections/Contact.jsx';
import Footer from './Sections/Footer.jsx';
import Experience from './Sections/Experience.jsx';
import Projects from './Sections/Projects.jsx';
import Certificates from './Sections/Certifications.jsx';
import TechStacks from './Sections/TechStacks.jsx';
import { Canvas } from '@react-three/fiber';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      {/* <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ height: '100vh', background: 'black' }}
      >
        <Exp />
      </Canvas> */}

      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="tech-stacks">
        <TechStacks />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};


export default App;
