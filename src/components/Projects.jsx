const Projects = () => {
  const portfolioItems = [
    { title: "Sistem IoT Cerdas", desc: "Desain sistem otomasi dengan mikrokontroler dan sensor." },
    { title: "Aplikasi Mobile AR", desc: "Media edukasi interaktif visual 3D menggunakan pelacakan markerless." },
    { title: "Platform Streaming", desc: "Overlay dan antarmuka web khusus untuk siaran langsung esports." }
  ];

  return (
    <section className="py-20 px-8 md:px-24 bg-darker">
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
        <span className="text-accent font-mono text-xl">01.</span> Beberapa Proyek Saya
        <div className="h-px bg-gray-700 flex-grow max-w-xs"></div>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-dark p-6 rounded-lg border border-gray-800 hover:-translate-y-2 hover:border-accent transition-all duration-300">
            <h4 className="text-xl font-bold text-gray-100 mb-3">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
            <div className="mt-6 text-accent text-sm font-mono cursor-pointer hover:underline">
              Lihat Detail &rarr;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;