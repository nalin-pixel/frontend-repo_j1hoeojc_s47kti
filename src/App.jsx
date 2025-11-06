import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Collaborate from './components/Collaborate';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Portfolio />
      <Experience />
      <Collaborate />
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 md:px-10 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Côte d'Azur Studio — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#experience" className="hover:text-gray-900">Experience</a>
            <a href="#collaborate" className="hover:text-gray-900">Collaborate</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
