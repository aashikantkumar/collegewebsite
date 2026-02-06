
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
