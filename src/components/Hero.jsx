import { Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex justify-center items-center pt-20 pb-10">
      {/* Statistik Kiri */}
      <div className="absolute left-8 top-1/3 flex flex-col gap-8 z-30 hidden md:flex">
        <div>
          <h3 className="text-4xl font-black text-[#ff4500]">3+</h3>
          <p className="text-xs font-semibold text-gray-500 tracking-widest mt-1">YEARS EXPERIENCE</p>
        </div>
        <div>
          <h3 className="text-4xl font-black text-[#ff4500]">15+</h3>
          <p className="text-xs font-semibold text-gray-500 tracking-widest mt-1">PROJECTS DONE</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-8 md:pl-40 z-10">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-6xl md:text-[80px] font-black tracking-tighter leading-[1.1] text-gray-900">
            Muhammad <br />
            <span className="text-[#ff4500]">Hafidzh Pribadi</span>
          </h1>
          <p className="text-gray-600 max-w-md font-mono text-sm leading-relaxed mt-2">
            Welcome to my portfolio. Turning ideas into intelligent solutions through IoT systems, Augmented Reality, and user-centered web design.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition shadow-lg">
              <Download size={18} /> Download CV
            </button>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-50 transition shadow-lg">
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative">
          <img src="/apd.jpeg" alt="Ahmad Khautal" className="w-[300px] md:w-[400px] h-auto object-contain drop-shadow-2xl rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;