import React from 'react';
// Ikon Github, Linkedin, dan Instagram telah diganti dengan ikon standar universal
import { ExternalLink, CheckCircle, Award, MapPin, Code, Cpu, Monitor, Smartphone, Send, Mail, Briefcase, Camera } from 'lucide-react';

// --- 1. ABOUT & EDUCATION SECTION ---
export const About = () => (
  <section id="about" className="w-full max-w-6xl mx-auto py-24 px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="flex flex-col justify-between">
        <div>
          <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-6 shadow-md">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
            SAYA MENCIPTAKAN PENGALAMAN <span className="text-[#ff4500]">DIGITAL & INTERAKTIF.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium mb-6">
            Saya Ahmad Khautal, mahasiswa teknik tingkat akhir yang sedang menyelesaikan studi untuk meraih gelar Sarjana Teknik. Saya memiliki ketertarikan mendalam pada pengembangan sistem *Internet of Things* (IoT) dan aplikasi *Augmented Reality* (AR) markerless untuk media edukasi.
          </p>
          <p className="text-gray-600 leading-relaxed font-medium mb-8">
            Fokus saya adalah mengubah ide kompleks menjadi produk fungsional—baik itu merancang skematik perangkat keras untuk otomasi agrikultur, maupun membangun antarmuka web yang bersih dan interaktif.
          </p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm pt-6 border-t border-gray-200">
          <MapPin size={16} className="text-[#ff4500]" /> Banda Aceh, Indonesia
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 font-bold text-sm uppercase tracking-widest rounded-md w-max">
          Education
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">Universitas (Sarjana Teknik)</h3>
            <span className="bg-[#ff4500]/10 text-[#ff4500] font-mono text-xs px-3 py-1 rounded-full font-bold">2022 - 2026</span>
          </div>
          <p className="text-[#6366f1] font-bold text-sm mb-3 uppercase tracking-wide">Undergraduate Engineering Thesis</p>
          <p className="text-gray-600 text-sm font-medium">
            Fokus penelitian pada pengembangan perangkat lunak AR dan sistem mikrokontroler. Aktif dalam perancangan metodologi R&D, evaluasi System Usability Scale (SUS), dan User Acceptance Testing (UAT).
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white border border-gray-200 p-4 rounded-2xl text-center shadow-sm">
            <h4 className="text-3xl font-black text-gray-900">3+</h4>
            <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">Years Exp</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-2xl text-center shadow-sm">
            <h4 className="text-3xl font-black text-gray-900">15+</h4>
            <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">Projects</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-2xl text-center shadow-sm">
            <h4 className="text-3xl font-black text-gray-900">100%</h4>
            <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">Dedication</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 2. SKILLS SECTION ---
export const Skills = () => {
  const skills = [
    { name: "React.js", type: "Frontend Web", icon: <Monitor size={18} /> },
    { name: "Tailwind CSS", type: "Frontend Web", icon: <Code size={18} /> },
    { name: "Unity / Vuforia", type: "Mobile AR", icon: <Smartphone size={18} /> },
    { name: "C++ / Arduino", type: "IoT Systems", icon: <Cpu size={18} /> },
    { name: "ESP32 & Sensors", type: "Hardware", icon: <Cpu size={18} /> },
    { name: "3D Visualizers", type: "Design", icon: <Monitor size={18} /> },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-8">
      <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-black text-gray-900 uppercase">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-[#6366f1] transition-colors group">
            <div className="text-gray-400 group-hover:text-[#6366f1] transition-colors">{s.icon}</div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">{s.name}</h4>
              <span className="text-[10px] font-bold bg-[#ff4500]/10 text-[#ff4500] px-2 py-0.5 rounded-sm">{s.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 3. EXPERIENCE & ORGANIZATIONS ---
export const Experience = () => (
  <section id="experience" className="w-full max-w-6xl mx-auto py-24 px-8">
    <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
      Experience & Leadership
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2 h-full bg-[#ff4500]"></div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-gray-500 uppercase border border-gray-200 px-2 py-1 rounded">Project Lead</span>
          <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">Feb 2026</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Banta Ali Smart Paddy Drying</h3>
        <p className="text-[#6366f1] font-bold text-xs mb-4 uppercase">Kayee Lee Village, Aceh Besar</p>
        <p className="text-gray-600 text-sm font-medium leading-relaxed">
          Merancang kerangka konsep, logo branding, model visual 3D, dan skematik perangkat keras IoT. Mengintegrasikan mikrokontroler ESP32, sensor DHT22, *load cell*, relay, dan *heater* untuk otomatisasi agrikultur skala kecil.
        </p>
      </div>

      <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2 h-full bg-[#6366f1]"></div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold text-gray-500 uppercase border border-gray-200 px-2 py-1 rounded">Researcher</span>
          <span className="text-xs font-mono bg-gray-100 text-gray-600 px-2 py-1 rounded">2025 - 2026</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">AR Educational Media R&D</h3>
        <p className="text-[#6366f1] font-bold text-xs mb-4 uppercase">Undergraduate Thesis Project</p>
        <p className="text-gray-600 text-sm font-medium leading-relaxed">
          Melakukan desain *flowchart*, evaluasi *System Usability Scale* (SUS), *User Acceptance Testing*, dan analisis efektivitas (N-gain) pada aplikasi *Augmented Reality markerless* berbasis *mobile* untuk pendidikan vokasi.
        </p>
      </div>
    </div>
  </section>
);

// --- 4. BUILT PROJECTS ---
export const Projects = () => {
  const projects = [
    { 
      title: "Smart Paddy Dryer IoT", 
      desc: "Sistem otomasi pengering padi dengan integrasi sensor suhu/kelembaban (DHT22), pemanas, dan mikrokontroler ESP32.", 
      tags: ["IoT", "ESP32", "Hardware"], year: "2026" 
    },
    { 
      title: "Markerless AR Visualizer", 
      desc: "Aplikasi mobile interaktif yang memproyeksikan objek 3D ke dunia nyata sebagai media pembelajaran vokasional tanpa marker fisik.", 
      tags: ["Mobile AR", "Unity", "3D"], year: "2026" 
    },
    { 
      title: "Clean Portfolio Web", 
      desc: "Website portofolio responsif dengan tema mode gelap/terang kustom menggunakan React.js dan Tailwind CSS.", 
      tags: ["React", "Tailwind", "Vite"], year: "2026" 
    },
  ];

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-24 px-8">
       <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
        Built Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
            <div className="w-full h-48 bg-gray-100 border-b border-gray-200 relative flex items-center justify-center overflow-hidden">
              <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-xs font-mono font-bold text-gray-700 shadow-sm">{p.year}</span>
              <Code size={40} className="text-gray-300 group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed flex-grow">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => <span key={tag} className="text-[10px] font-bold border border-gray-300 text-gray-600 px-2 py-1 rounded">{tag}</span>)}
              </div>
              
              <button className="flex items-center gap-2 text-[#ff4500] font-bold text-sm uppercase hover:text-[#6366f1] transition-colors mt-auto w-max">
                Read Case Study <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 5. CERTIFICATIONS ---
export const Certifications = () => (
  <section id="certifications" className="w-full max-w-6xl mx-auto py-12 px-8">
    <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
      Licenses & Certifications
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Frontend Web Development", issuer: "React & Vite Masters", id: "FE-2026" },
        { title: "Internet of Things Systems", issuer: "Hardware Engineering", id: "IOT-ESP32" },
        { title: "AR Interface Design", issuer: "Interactive Design Foundation", id: "AR-UX26" }
      ].map((cert, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#ff4500] transition">
          <div className="w-full h-32 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center mb-4">
             <Award className="text-gray-300" size={32} />
          </div>
          <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{cert.title}</h4>
          <p className="text-[#ff4500] text-xs font-bold uppercase tracking-wide mb-4">{cert.issuer}</p>
          <div className="flex justify-between items-center mt-auto">
             <span className="text-[10px] text-gray-400 font-mono">ID: {cert.id}</span>
             <button className="text-xs font-bold border border-gray-900 px-3 py-1 rounded hover:bg-gray-900 hover:text-white transition">Details &rarr;</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- 6. DARK CONTACT SECTION ---
// --- 6. LIGHT CONTACT SECTION (Menyesuaikan Tema) ---
export const Contact = () => (
  <section id="contact" className="w-full max-w-6xl mx-auto py-24 px-8 mb-10">
    <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
      Contact & Collaboration
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Kolom Informasi & Teks */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          MARI CIPTAKAN <br />
          <span className="text-[#ff4500]">SESUATU YANG LUAR BIASA.</span>
        </h2>
        <p className="text-gray-600 font-medium mb-10 leading-relaxed">
          Tertarik untuk berkolaborasi dalam pengembangan web, membahas penelitian IoT/AR, atau sekadar menyapa? Saya selalu terbuka untuk peluang baru. Jangan ragu untuk menghubungi saya melalui formulir ini.
        </p>

        <div className="flex flex-col gap-6">
          <a href="mailto:ahmad@example.com" className="flex items-center gap-4 text-gray-600 hover:text-[#ff4500] transition group w-max">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm group-hover:border-[#ff4500] transition">
              <Mail size={20} className="group-hover:text-[#ff4500]" />
            </div>
            <span className="font-bold">ahmad@example.com</span>
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-600 hover:text-[#6366f1] transition group w-max">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm group-hover:border-[#6366f1] transition">
              <Briefcase size={20} className="group-hover:text-[#6366f1]" />
            </div>
            <span className="font-bold">Ahmad Khautal on LinkedIn</span>
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition group w-max">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm group-hover:border-gray-900 transition">
              <Code size={20} className="group-hover:text-gray-900" />
            </div>
            <span className="font-bold">github.com/khautal</span>
          </a>
        </div>
      </div>

      {/* Kolom Formulir Interaktif */}
      <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg relative group">
        {/* Garis Gradien Dekoratif di Atas Form */}
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#ff4500] to-[#6366f1] rounded-t-2xl"></div>
        
        <h3 className="text-2xl font-black text-gray-900 mb-2 mt-2">Kirim Pesan</h3>
        <p className="text-gray-500 text-sm mb-8 font-medium">Saya akan membalas pesan Anda secepat mungkin.</p>
        
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Nama</label>
              <input type="text" placeholder="Nama Anda" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Email</label>
              <input type="email" placeholder="email@anda.com" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Subjek</label>
            <input type="text" placeholder="Tujuan pesan ini?" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Pesan</label>
            <textarea rows="4" placeholder="Tuliskan pesan Anda di sini..." className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition resize-none"></textarea>
          </div>
          <button type="button" className="mt-4 w-full bg-gray-900 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff4500] transition-colors duration-300 shadow-md">
            <Send size={18} /> Kirim Sekarang
          </button>
        </form>
      </div>
    </div>
  </section>
);