import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import { About, Skills, Experience, Organizations, Projects, Certifications, Contact } from './components/Sections';

function App() {
  return (
    <div className="relative w-full bg-[#f8f9fa] font-sans">
      <div className="fixed inset-0 bg-perspective-grid z-0 pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col overflow-x-hidden">
        <Hero />
        <Ticker />
        
        <About />
        <Skills />
        <Experience />
        {/* Render Organizations tepat di bawah Experience */}
        <Organizations /> 
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-gray-400 font-mono text-sm bg-white border-t border-gray-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <p>Built with React & Tailwind. Designed for Ahmad Khautal.</p>
      </footer>
    </div>
  );
}

export default App;