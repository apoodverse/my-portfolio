import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';

function App() {
  return (
    <div className="relative w-full h-screen bg-[#f8f9fa] overflow-hidden font-sans">
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-perspective-grid z-0 pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative z-10 w-full h-full">
        <Hero />
      </main>

      <Ticker />
    </div>
  );
}

export default App;