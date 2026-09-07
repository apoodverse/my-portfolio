const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center pt-20">
      
      {/* Statistik Kiri */}
      <div className="absolute left-8 top-1/3 flex flex-col gap-10">
        <div>
          <h3 className="text-4xl font-bold text-red-500">3+</h3>
          <p className="text-xs font-medium text-gray-400 tracking-widest mt-1">YEARS EXPERIENCE</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-red-500">30+</h3>
          <p className="text-xs font-medium text-gray-400 tracking-widest mt-1">PROJECTS DONE</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-red-500">100%</h3>
          <p className="text-xs font-medium text-gray-400 tracking-widest mt-1">CREATIVE DRIVE</p>
        </div>
      </div>

      {/* Center 3D Text & Avatar */}
      <div className="relative w-full flex flex-col items-center justify-center pointer-events-none">
        {/* Teks Outline */}
        <div className="text-center z-10 leading-none">
          <h1 className="text-[120px] font-black text-gray-200/50 uppercase tracking-tighter mix-blend-multiply">
            I'M BORN TO BE
          </h1>
          <h1 className="text-[140px] font-black text-outline uppercase tracking-tighter -mt-10">
            FULLSTACK DEV
          </h1>
        </div>

        {/* 3D Avatar Placeholder */}
        {/* Anda bisa menggunakan hasil generate AI visualizer 3D Anda di sini */}
        <div className="absolute bottom-[-15%] z-20 pointer-events-auto">
          <img 
            src="/path-to-your-3d-avatar.png" 
            alt="3D Avatar" 
            className="h-[500px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;