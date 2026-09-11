import React, { useState, useEffect } from 'react';
import { ExternalLink, CheckCircle, Award, MapPin, Code, Cpu, Monitor, Smartphone, Send, Mail, Briefcase, Camera, X, Users, ArrowRight, ChevronLeft, ChevronRight, Layout, PenTool } from 'lucide-react';

// --- POP-UP MODAL COMPONENT ---
export const PopupModal = ({ isOpen, onClose, data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen, data]);

  if (!isOpen || !data) return null;

  const imageList = data.images && data.images.length > 0 
    ? data.images 
    : (data.image ? [data.image] : ['/avatar-placeholder.png']);
    
  const hasMultipleImages = imageList.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative transform transition-all scale-100"
        onClick={e => e.stopPropagation()} 
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-full hover:bg-gray-200 transition z-30 text-gray-900 shadow-sm"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative group">
          <img 
            src={imageList[currentImageIndex]} 
            alt={`Slide ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover transition-all duration-300" 
          />
          
          {hasMultipleImages && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full text-gray-900 shadow-xl opacity-0 group-hover:opacity-100 transition-all z-20 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full text-gray-900 shadow-xl opacity-0 group-hover:opacity-100 transition-all z-20 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {imageList.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-2 rounded-full transition-all shadow-sm ${idx === currentImageIndex ? 'w-6 bg-[#ff4500]' : 'w-2 bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col max-h-[80vh] overflow-y-auto">
          <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-bold text-xs uppercase tracking-widest rounded-md w-max mb-4">
            {data.tag}
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">{data.title}</h3>
          <p className="text-[#ff4500] font-bold text-sm uppercase mb-6">{data.subtitle}</p>
          
          <div className="text-gray-600 text-sm leading-relaxed mb-6 space-y-4">
            {data.fullDescription}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- 1. ABOUT SECTION ---
export const About = () => (
  <section id="about" className="w-full max-w-6xl mx-auto py-24 px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="flex flex-col justify-between">
        <div>
          <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-6 shadow-md">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
            I CREATE DIGITAL & <span className="text-[#ff4500]">INTERACTIVE EXPERIENCES.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium mb-6">
            I am Muhammad Hafidzh Pribadi, a Computer Engineering fresh graduate from Syiah Kuala University, focusing on UI/UX Design, Software & Web Development, and the Internet of Things (IoT).
          </p>
          <p className="text-gray-600 leading-relaxed font-medium mb-8">
            Experienced in digital interface design (Figma), 3D modeling (Blender), as well as web, interactive application, and Augmented Reality development (Unity, Python, C#). I am committed to delivering innovative digital solutions equipped with strong analytical and problem-solving skills.
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
            <h3 className="text-xl font-bold text-gray-900">Universitas Syiah Kuala</h3>
            <span className="bg-[#ff4500]/10 text-[#ff4500] font-mono text-xs px-3 py-1 rounded-full font-bold">2022 - 2026</span>
          </div>
          <p className="text-[#6366f1] font-bold text-sm mb-3 uppercase tracking-wide">Bachelor of Computer Engineering</p>
          <p className="text-gray-600 text-sm font-medium">
            Graduated with a GPA of 3.34/4.00. Focusing on Embedded Systems, IoT Architecture, UI/UX Design, and modern software development.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white border border-gray-200 p-4 rounded-2xl text-center shadow-sm">
            <h4 className="text-3xl font-black text-gray-900">4+</h4>
            <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">Main Skills</p>
          </div>
          <div className="bg-white border border-gray-200 p-4 rounded-2xl text-center shadow-sm">
            <h4 className="text-3xl font-black text-gray-900">10+</h4>
            <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">Tech Stacks</p>
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


// --- 2. SKILLS SECTION (Unified Grid) ---
export const Skills = () => {
  const skills = [
    { name: "React.JS", type: "Web Dev", icon: <Monitor size={18} /> },
    { name: "Python", type: "Programming", icon: <Code size={18} /> },
    { name: "IoT Development", type: "Engineering", icon: <Cpu size={18} /> },
    { name: "Embedded Systems", type: "Engineering", icon: <Cpu size={18} /> },
    { name: "UI/UX Design", type: "Design", icon: <Layout size={18} /> },
    { name: "Figma", type: "Tools", icon: <PenTool size={18} /> },
    { name: "Unity Engine", type: "AR/VR", icon: <Smartphone size={18} /> },
    { name: "Arduino IDE", type: "Tools", icon: <Cpu size={18} /> },
    { name: "MySQL", type: "Database", icon: <Monitor size={18} /> },
    { name: "Problem Solving", type: "Soft Skill", icon: <Users size={18} /> },
    { name: "Leadership", type: "Soft Skill", icon: <Briefcase size={18} /> },
    { name: "Communication", type: "Soft Skill", icon: <Users size={18} /> },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-8">
      <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-black text-gray-900 uppercase">Technical & Soft Skills</h2>
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


// --- 3. EXPERIENCE SECTION ---
export const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const experiences = [
    {
      title: "AR Developer Intern",
      subtitle: "Stasiun Kelas 1 Meteorologi Banda Aceh (BMKG)",
      tag: "Internship",
      year: "Dec 2024 - Jan 2025",
      images: ["/bmkg-1.jpg"], 
      shortDesc: "Developed and deployed an interactive WebAR educational experience to showcase meteorological instruments.",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Developed and deployed an interactive WebAR educational experience to showcase meteorological instruments, enabling direct browser access without requiring application installation.</li>
          <li>Reconstructed 3D instrument assets using photogrammetry pipelines via Meshroom and optimized mesh topology, textures, and scaling in Blender to maximize rendering efficiency.</li>
          <li>Integrated interactive 3D models into Unity using Zapworks SDK, implementing touch gesture controls and marker-based tracking for seamless real-time visualization.</li>
        </ul>
      )
    },
    {
      title: "Independent Study Program (MBKM)",
      subtitle: "Dicoding Indonesia",
      tag: "Machine Learning",
      year: "Sep 2024 - Dec 2024",
      images: ["/dicoding-1.jpg"], 
      shortDesc: "Completed a 3-month structured ML program, building predictive models using Python, Google Colab, and scikit-learn.",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Completed 3-month structured ML program, building and evaluating predictive models using Python, Google Colab, and scikit-learn on real datasets.</li>
          <li>Delivered a final project applying supervised learning to a classification problem, demonstrating end-to-end ML pipeline from data preprocessing to model evaluation.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-24 px-8">
      <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
        Work Experience
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => {
          const coverImage = exp.images && exp.images.length > 0 ? exp.images[0] : '/avatar-placeholder.png';
          return (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all group flex flex-col overflow-hidden">
              <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                <img src={coverImage} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-mono font-bold text-gray-900 shadow-sm">{exp.year}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute -top-4 left-6 bg-[#ff4500] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {exp.tag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">{exp.title}</h3>
                <p className="text-[#6366f1] font-bold text-xs mb-4 uppercase">{exp.subtitle}</p>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 flex-grow">{exp.shortDesc}</p>
                
                <button 
                  onClick={() => setSelectedItem(exp)}
                  className="w-full py-3 bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500] transition-colors cursor-pointer"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <PopupModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} data={selectedItem} />
    </section>
  );
};


// --- 4. ORGANIZATIONS SECTION ---
export const Organizations = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const organizations = [
    {
      title: "Pekan Bakti Mahasiswa Teknik (PBMT) XI",
      subtitle: "Faculty of Engineering USK",
      tag: "Project Leader",
      year: "2024",
      images: ["/org-1.jpg"], 
      shortDesc: "Directed a community service program at Desa Luthu Lamweu, managing a Rp 10.000.000 operational budget.",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Directed and successfully executed a community service program at Desa Luthu Lamweu, Aceh Besar, aligning with the Tri Dharma of Higher Education.</li>
          <li>Coordinated the grand opening ceremony and managed protocols for key VIP stakeholders, successfully hosting the Acting Regent (Pj Bupati) of Aceh Besar, the Vice Rector of USK, and regional security officials (Polsek and Koramil Aceh Besar) to strengthen institutional support.</li>
          <li>Led a cross-functional committee to bridge the academic community and villagers, facilitating hands-on problem-solving initiatives using engineering principles.</li>
          <li>Managed an operational and logistical budget of Rp 10.000.000, ensuring highly transparent and efficient financial allocation with an absorption rate of 99.8% (Rp 9.986.600 spent).</li>
          <li>Overcame logistical challenges and resource limitations through strategic action planning and cross-team coordination, ensuring all planned community programs were delivered effectively.</li>
        </ul>
      )
    },
    {
      title: "Computer Engineering Student Association USK",
      subtitle: "HIMATEKKOM",
      tag: "Head of PR & Member",
      year: "2023 - 2025",
      images: ["/org-2.jpg"],
      shortDesc: "Served as Head of Public Relations Division (2025) and Public Relations Division Member (2023 & 2024).",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Head of Public Relations Division - Computer Engineering Student Association USK (2025).</li>
          <li>Public Relations Division Member - Computer Engineering Student Association USK (2023 & 2024).</li>
        </ul>
      )
    },
    {
      title: "Computer Multi Challenge Day (CMD)",
      subtitle: "Event Organization",
      tag: "Head of Sponsorship",
      year: "2025",
      images: ["/org-3.jpg"],
      shortDesc: "Served as the Head of Sponsorship & Partnership Division for the Computer Multi Challenge Day 2025.",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Head of Sponsorship & Partnership Division - Computer Multi Challenge Day (CMD) (2025).</li>
        </ul>
      )
    },
    {
      title: "Student Executive Board (BEM)",
      subtitle: "Faculty of Engineering USK",
      tag: "PR Division Member",
      year: "2024",
      images: ["/org-4.jpg"],
      shortDesc: "Served as a Public Relations Division Member for the Student Executive Board, Faculty of Engineering USK in 2024.",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Public Relations Division Member - Student Executive Board, Faculty of Engineering USK (2024).</li>
        </ul>
      )
    }
  ];

  return (
    <section id="organizations" className="w-full max-w-6xl mx-auto py-24 px-8 border-t border-gray-200">
      <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
        Organizations & Leadership
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {organizations.map((org, idx) => {
          const coverImage = org.images && org.images.length > 0 ? org.images[0] : '/avatar-placeholder.png';
          return (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all group flex flex-col overflow-hidden">
              <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                <img src={coverImage} alt={org.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-mono font-bold text-gray-900 shadow-sm">{org.year}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute -top-4 left-6 bg-[#6366f1] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {org.tag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">{org.title}</h3>
                <p className="text-[#ff4500] font-bold text-xs mb-4 uppercase">{org.subtitle}</p>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 flex-grow">{org.shortDesc}</p>
                
                <button 
                  onClick={() => setSelectedItem(org)}
                  className="w-full py-3 bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1] transition-colors cursor-pointer"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <PopupModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} data={selectedItem} />
    </section>
  );
};


// --- 5. BUILT PROJECTS SECTION ---
export const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const projects = [
    { 
      title: "Banta Ali Smart Paddy Drying System", 
      subtitle: "Innovillage 2025",
      tag: "UI/UX & Hardware",
      year: "2025",
      images: ["/project-banta-1.jpg", "/project-banta-2.jpg"], 
      shortDesc: "Designed an ergonomic web dashboard UI/UX and engineered hardware architecture using an ESP32 microcontroller.", 
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Designed an ergonomic, farmer-friendly web dashboard UI/UX to monitor real-time temperature, humidity, and grain weight reduction with high system stability.</li>
          <li>Engineered the hardware architecture using an ESP32 microcontroller, strategically isolating electronic components outside the drying chamber to prevent overheating and moisture damage.</li>
          <li>Integrated DHT22 sensors, load cells, ceramic heaters, and fans with an automated control logic that precisely halts the heating process once the grain reaches its target dry weight.</li>
          <li>Conducted continuous technical evaluations to ensure even heat distribution and minimize sensor errors, alongside drafting comprehensive Standard Operating Procedures (SOP) for assembly, user safety, and future scalability.</li>
        </ul>
      )
    },
    { 
      title: "IoT-Based Smart Waste Management System", 
      subtitle: "IoT & Cloud Project",
      tag: "Fullstack IoT",
      year: "2025",
      images: ["/project-waste-1.jpg"], 
      shortDesc: "Developed an end-to-end Smart Waste Management system centered on an ESP32 microcontroller, integrating AWS backend.", 
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Developed an end-to-end Smart Waste Management system centered on an ESP32 microcontroller, integrating ultrasonic sensors for waste level monitoring and MQ-135 gas sensors for odor detection. Built an end-to-end data pipeline covering IoT data acquisition, data preprocessing, ML model training & validation, backend integration, and web development, validated on 210 participants.</li>
          <li>Architected a scalable cloud backend utilizing AWS services (IoT Core, Lambda, DynamoDB) via MQTT, enabling real-time data analysis, automated full/emergency notifications, and automatic lid actuation via servo motor.</li>
          <li>Designed and prototyped custom 3D-printed casings for hardware protection and a cross-platform (web/mobile) dashboard for real-time visualization of bin status, optimizing waste collection efficiency.</li>
        </ul>
      )
    },
    { 
      title: "Ablution Wastewater Recycling & Smart Irrigation System", 
      subtitle: "Embedded System",
      tag: "Arduino & FSM",
      year: "2024",
      images: ["/project-irrigation-1.jpg"], 
      shortDesc: "Developed an automated embedded system using Arduino Uno to recycle ablution wastewater for mosque garden irrigation.", 
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Developed an automated embedded system to recycle ablution wastewater for mosque garden irrigation, promoting water conservation and environmental sustainability.</li>
          <li>Engineered the hardware architecture using Arduino Uno, integrating soil moisture and ultrasonic sensors to dynamically control a 10V water pump and 12V solenoid valve based on real-time data.</li>
          <li>Implemented control logic utilizing Finite State Machine (FSM) principles to optimize water distribution, ensuring irrigation only triggers when soil moisture drops below 60% and reservoir levels are sufficient.</li>
        </ul>
      )
    },
    { 
      title: "Harvest Hub - Agricultural Harvest App", 
      subtitle: "UI/UX Project",
      tag: "Figma Prototyping",
      year: "2023",
      images: ["/project-harvest-1.jpg"], 
      shortDesc: "Designed the UI/UX of a conceptual mobile application aimed at bridging local farmers and consumers.", 
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Designed the UI/UX of Harvest Hub, a conceptual mobile application aimed at bridging local farmers and consumers to streamline harvest data recording and direct fresh produce distribution.</li>
          <li>Formulated user-centric solutions based on defined problem statements, specifically addressing farmers' productivity planning constraints and consumers' difficulties in sourcing local harvests.</li>
          <li>Developed user flows, high-fidelity wireframes, and interactive prototypes using Figma to visualize core features (e.g., harvest recording, plant/pest scanning, expert consultation) for usability validation and concept testing.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-24 px-8 border-t border-gray-200">
       <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
        Built Projects
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, idx) => {
          const coverImage = p.images && p.images.length > 0 ? p.images[0] : '/avatar-placeholder.png';
          return (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all group flex flex-col overflow-hidden">
              <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
                <img src={coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-mono font-bold text-gray-900 shadow-sm">{p.year}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute -top-4 left-6 bg-[#ff4500] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {p.tag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">{p.title}</h3>
                <p className="text-[#6366f1] font-bold text-xs mb-4 uppercase">{p.subtitle}</p>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 flex-grow">{p.shortDesc}</p>
                
                <button 
                  onClick={() => setSelectedItem(p)}
                  className="w-full py-3 bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500] transition-colors cursor-pointer"
                >
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <PopupModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} data={selectedItem} />
    </section>
  );
};


// --- 6. CERTIFICATIONS SECTION ---
export const Certifications = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const certifications = [
    {
      title: "Top 180 Innovillage 2025 - Smart Paddy Drying System",
      subtitle: "Telkom University",
      tag: "Achievement / Award",
      year: "2025",
      images: ["/cert-innovillage-1.jpg"], 
      shortDesc: "Designed and assembled a prototype architecture for an ESP32 microcontroller-based automated paddy drying system.",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Designed and assembled a prototype architecture for an ESP32 microcontroller-based automated paddy drying system.</li>
          <li>Integrated temperature and humidity sensors (DHT22) along with a weight scale module (Load Cell + HX711) for real-time monitoring of paddy conditions.</li>
          <li>Successfully implemented a technological solution that efficiently preserves the quality and consistency of farmers' yields.</li>
        </ul>
      )
    },
    {
      title: "Internet of Things Device Engineering",
      subtitle: "Indonesian Digital Telecommunication Professional Certification Agency",
      tag: "BNSP Certification",
      year: "Sep 2025",
      images: ["/cert-iot-1.jpg"], 
      shortDesc: "Completed competency certification in IoT Engineering and awarded BNSP Competency Certificate.",
      fullDescription: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Completed competency certification in IoT Engineering.</li>
          <li>Awarded BNSP Competency Certificate.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="certifications" className="w-full max-w-6xl mx-auto py-24 px-8 border-t border-gray-200">
      <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
        Achievements & Awards
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => {
          const coverImage = cert.images && cert.images.length > 0 ? cert.images[0] : '/avatar-placeholder.png';
          return (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all group flex flex-col overflow-hidden">
              <div className="w-full h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                <img src={coverImage} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-0" />
                <Award className="text-white/50 z-10 drop-shadow-md" size={60} />
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-mono font-bold text-gray-900 shadow-sm z-20">{cert.year}</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute -top-4 left-6 bg-[#ff4500] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {cert.tag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">{cert.title}</h3>
                <p className="text-[#6366f1] font-bold text-xs mb-4 uppercase">{cert.subtitle}</p>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 flex-grow">{cert.shortDesc}</p>
                
                <button 
                  onClick={() => setSelectedItem(cert)}
                  className="w-full py-3 bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500] transition-colors cursor-pointer"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <PopupModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} data={selectedItem} />
    </section>
  );
};


// --- 7. CONTACT SECTION ---
export const Contact = () => (
  <section id="contact" className="w-full max-w-6xl mx-auto py-24 px-8 mb-10 border-t border-gray-200">
    <div className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-widest rounded-md mb-8 shadow-md">
      Contact & Collaboration
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          LET'S BUILD <br />
          <span className="text-[#ff4500]">SOMETHING AMAZING.</span>
        </h2>
        <p className="text-gray-600 font-medium mb-10 leading-relaxed">
          Interested in IoT development, UI/UX Design, or discussing other innovative projects? Feel free to reach out and drop a message!
        </p>

        <div className="flex flex-col gap-6">
          <a href="mailto:mhmhafidzz@gmail.com" className="flex items-center gap-4 text-gray-600 hover:text-[#ff4500] transition group w-max">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm group-hover:border-[#ff4500] transition">
              <Mail size={20} className="group-hover:text-[#ff4500]" />
            </div>
            <span className="font-bold">mhmhafidzz@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/muhammad-hafidzh-pribadi" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-[#6366f1] transition group w-max">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm group-hover:border-[#6366f1] transition">
              <Briefcase size={20} className="group-hover:text-[#6366f1]" />
            </div>
            <span className="font-bold">Muhammad Hafidzh Pribadi</span>
          </a>
          <a href="#" className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition group w-max">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm group-hover:border-gray-900 transition">
              <Code size={20} className="group-hover:text-gray-900" />
            </div>
            <span className="font-bold">Portfolio / GitHub</span>
          </a>
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg relative group">
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#ff4500] to-[#6366f1] rounded-t-2xl"></div>
        
        <h3 className="text-2xl font-black text-gray-900 mb-2 mt-2">Send a Message</h3>
        <p className="text-gray-500 text-sm mb-8 font-medium">I will get back to you as soon as possible.</p>
        
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Name</label>
              <input type="text" placeholder="Your Name" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Email</label>
              <input type="email" placeholder="your@email.com" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Subject</label>
            <input type="text" placeholder="What is this about?" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Message</label>
            <textarea rows="4" placeholder="Write your message here..." className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500] transition resize-none"></textarea>
          </div>
          <button type="button" className="mt-4 w-full bg-gray-900 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff4500] transition-colors duration-300 shadow-md">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);