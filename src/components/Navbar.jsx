import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Award, Mail, Users } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Menambahkan 'organizations' ke dalam array pemantau scroll
      const sections = ['home', 'about', 'experience', 'organizations', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActive(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <Home size={16} />, label: 'Home' },
    { id: 'about', icon: <User size={16} />, label: 'About' },
    { id: 'experience', icon: <Code size={16} />, label: 'Experience' },
    { id: 'organizations', icon: <Users size={16} />, label: 'Organizations' },
    { id: 'projects', icon: <Briefcase size={16} />, label: 'Projects' },
    { id: 'contact', icon: <Mail size={16} />, label: 'Contact' },
  ];

  return (
    <header className="w-full flex justify-between items-center px-8 py-6 fixed top-0 left-0 z-50 pointer-events-none">
      <div className="flex items-center gap-2 text-[#ff4500] font-bold text-2xl tracking-wide w-1/4 pointer-events-auto">
        <span className="text-3xl">✦</span> portfolio
      </div>

      <div className="flex justify-center w-auto pointer-events-auto hidden xl:flex">
        <nav className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-full px-2 py-2 flex items-center gap-1 transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                active === item.id
                  ? 'bg-[#ff4500] text-white shadow-md scale-105'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="w-1/4"></div>
    </header>
  );
};

export default Navbar;

