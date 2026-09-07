import { Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-start px-8 py-6 absolute top-0 left-0 z-50">
      {/* Logo Kiri */}
      <div className="flex items-center gap-2 text-red-500 font-bold text-2xl tracking-wide">
        <span className="text-3xl">✦</span> portfolio
      </div>

      {/* Floating Pill Nav Tengah */}
      <nav className="bg-white/80 backdrop-blur-md border border-white shadow-sm rounded-full px-2 py-2 flex items-center gap-2">
        <button className="bg-red-500 text-white flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium shadow-md">
          <Home size={16} /> Home
        </button>
        <button className="text-gray-500 hover:text-gray-900 flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors">
          <User size={16} /> About
        </button>
        <button className="text-gray-500 hover:text-gray-900 flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors">
          <Briefcase size={16} /> Projects
        </button>
        <button className="text-gray-500 hover:text-gray-900 flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors">
          <Mail size={16} /> Contact
        </button>
      </nav>

      {/* Profil Kanan */}
      <div className="text-right max-w-xs flex flex-col items-end">
        {/* Menggunakan font-serif untuk mensimulasikan gaya tanda tangan */}
        <h2 className="font-serif italic text-3xl font-semibold text-gray-800 mb-2">Ahmad Khautal</h2>
        <p className="text-xs text-gray-500 leading-relaxed text-right mb-4">
          Hi, I'm Ahmad Khautal. I bridge the gap between engineering and art to design immersive, high-performance web experiences.
        </p>
        <button className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-xs font-bold tracking-wider hover:bg-gray-100 transition-colors">
          GET IN TOUCH ↗
        </button>
      </div>
    </header>
  );
};

export default Navbar;