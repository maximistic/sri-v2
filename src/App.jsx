import Navbar from './Sections/Navbar.jsx';
import Hero from './Sections/Hero.jsx';
import About from './Sections/About.jsx';
import Contact from './Sections/Contact.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero/>
      <About />
      
      <Contact />
    </main>
  )
}

export default App