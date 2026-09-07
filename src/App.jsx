import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
// Pastikan Skills ikut ter-import di baris ini
import { About, Skills, Experience, Projects, Certifications, Contact } from './components/Sections';

function App() {
  return (
    <div className="relative w-full bg-[#f8f9fa] font-sans">
      
      {/* Background Grid Layer (Fixed agar tidak ikut terscroll) */}
      <div className="fixed inset-0 bg-perspective-grid z-0 pointer-events-none"></div>
      
      <Navbar />
      
      {/* Kontainer Utama */}
      <main className="relative z-10 w-full flex flex-col overflow-x-hidden">
        <Hero />
        
        {/* Ticker diletakkan tepat di bawah Hero sebagai pembatas */}
        <Ticker />
        
        {/* Sections Berurutan */}
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Terang Menyesuaikan Contact Section */}
      <footer className="relative z-10 py-8 text-center text-gray-400 font-mono text-sm bg-white border-t border-gray-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <p>Built with React & Tailwind. Designed for Ahmad Khautal.</p>
      </footer>
    </div>
  );
}

export default App;