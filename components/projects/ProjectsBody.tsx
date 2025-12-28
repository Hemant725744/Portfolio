"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen, Code, Briefcase, GraduationCap, Youtube, Globe } from "lucide-react";

// --- SECTION 1: ACADEMIC & INSTITUTE ---
const academicProjects = [
    {
    id: "A-01",
    title: "Ransomware Detection",
    tag: "Final Year Project",
    desc: "Deep Learning system using LSTM & CNN to detect crypto-ransomware in real-time.",
    tech: ["Python", "TensorFlow", "Deep Learning"],
    link: "#"
  },
  {
    id: "A-02",
    title: "EduEase System",
    tag: "Research Paper",
    desc: "Published research on student attendance automation using PHP & MySQL.",
    tech: ["PHP", "MySQL", "Research"],
    link: "#"
  },
  {
    id: "A-03",
    title: "Assignment Navigator",
    tag: "Institute Tool",
    desc: "A smart navigation tool to help students manage and track academic assignments efficiently.",
    tech: ["React.js", "Node.js", "Management"],
    link: "#" // YouTube Link
  },
  {
    id: "A-04",
    title: "Algorithm Visualizer",
    tag: "Learning Tool",
    desc: "Interactive platform to visualize sorting and pathfinding algorithms in real-time.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    link: "https://youtu.be/Coi_d7N_tA8?si=Ts86QHtp2Mmw12jN" // YouTube Link
  }
];

// --- SECTION 2: FREELANCE & WORK (5 Projects) ---
const freelanceProjects = [
  {
    id: "F-01",
    title: "Kosal Kanakia",
    tag: "Full Website",
    desc: "Designed and developed the entire personal portfolio website.",
    tech: ["Web Development", "UI/UX"],
    link: "https://kosalkanakia.com/"
  },
  {
    id: "F-02",
    title: "Hirvankur India",
    tag: "Home & About",
    desc: "Developed the Home and About Us pages for the NGO website.",
    tech: ["Frontend", "Layouts"],
    link: "https://hirvankurindia.org/"
  },
  {
    id: "F-03",
    title: "SEMS Webz",
    tag: "Client Section",
    desc: "Contributed to the development of the 'Our Clients' section.",
    tech: ["Frontend", "Components"],
    link: "https://semswebz.com/activities/"
  },
  {
    id: "F-04",
    title: "SEMS Foundation",
    tag: "Events Page",
    desc: "Built the Events page to showcase welfare foundation activities.",
    tech: ["Web Design", "CMS"],
    link: "https://semsfoundation.org/events/"
  },
  {
    id: "F-05",
    title: "DigiSamaksh",
    tag: "Blog Page",
    desc: "Developed and styled the dynamic blog listing page.",
    tech: ["Web Dev", "Styling"],
    link: "https://digisamaksh.com/blog-page/"
  }
];

// --- SECTION 3: THE PLAYGROUND (LEARNING) ---
// Kept "Learning" projects here as requested previously
const playgroundProjects = [
  {
    id: "L-01",
    title: "Weather App",
    desc: "Real-time weather fetching using OpenWeatherMap API.",
    tech: ["React", "API"]
  },
  {
    id: "L-02",
    title: "Task Master",
    desc: "A minimal Todo list application with local storage persistence.",
    tech: ["Next.js", "State"]
  },
  {
    id: "L-03",
    title: "Ransomware Detect",
    desc: "Early stage experiment using LSTM for security patterns.",
    tech: ["Python", "AI"]
  }
];

export default function ProjectBody() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-black font-sans pt-[70px] pb-20 overflow-x-hidden">
      
      {/* ================= FULL WIDTH HERO SECTION ================= */}
      <div className="w-full relative mb-12 md:mb-24 border-b-2 border-black bg-black">
        <img 
          src="/projectbg.jpg" 
          alt="Projects Hero Banner" 
          // FIX: Mobile gets height and object-contain to prevent cutting. 
          // Desktop gets object-cover for full width impact.
          className="w-full h-[250px] sm:h-[10px] md:h-[650px]  md:object-cover object-center bg-black"
        />
      </div>


      {/* ================= SECTION 1: ACADEMIC & INSTITUTE ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex items-center gap-4 mb-10 border-b-2 border-black pb-4">
           <div className="p-3 bg-black text-white rounded-lg">
              <GraduationCap size={24} />
           </div>
           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Academic & Institute</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {academicProjects.map((project) => (
             <ProjectCard 
               key={project.id} 
               data={project} 
               theme="black" 
               iconType="youtube" // Special flag for YouTube icon
             />
           ))}
        </div>
      </section>


      {/* ================= SECTION 2: FREELANCE ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex items-center gap-4 mb-10 border-b-2 border-[#E63946] pb-4">
           <div className="p-3 bg-[#E63946] text-white rounded-lg">
              <Briefcase size={24} />
           </div>
           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#E63946]">Freelance & Work</h2>
        </div>

        {/* Grid adjusted for 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {freelanceProjects.map((project) => (
             <ProjectCard 
               key={project.id} 
               data={project} 
               theme="red" 
               iconType="web" // Special flag for Web icon
             />
           ))}
        </div>
      </section>


      {/* ================= SECTION 3: THE PLAYGROUND (LEARNING) ================= */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-10 border-b-2 border-gray-300 pb-4">
           <div className="p-3 bg-white border-2 border-black text-black rounded-lg">
              <Code size={24} />
           </div>
           <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-700">The Playground</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {playgroundProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-2 border-black p-6 rounded-xl hover:shadow-[4px_4px_0px_#000] hover:-translate-y-1 transition-all"
              >
                 <div className="flex justify-between items-start mb-4">
                    <FolderOpen size={20} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-400">{project.id}</span>
                 </div>
                 <h3 className="text-xl font-bold uppercase mb-2">{project.title}</h3>
                 <p className="text-sm text-gray-600 mb-4 h-10">{project.desc}</p>
                 <div className="flex gap-2">
                    {project.tech.map(t => (
                       <span key={t} className="text-[10px] font-bold px-2 py-1 bg-gray-100 border border-gray-200 rounded">
                         {t}
                       </span>
                    ))}
                 </div>
              </motion.div>
           ))}
        </div>
      </section>

    </div>
  );
}

// --- REUSABLE CARD COMPONENT ---
function ProjectCard({ data, theme, iconType }: { data: any, theme: "black" | "red", iconType?: "youtube" | "web" }) {
  const isRed = theme === "red";
  const borderColor = isRed ? "border-[#E63946]" : "border-black";
  const shadowColor = isRed ? "shadow-[8px_8px_0px_#E63946]" : "shadow-[8px_8px_0px_#000]";
  const textColor = isRed ? "text-[#E63946]" : "text-black";

  // Determine which icon to show
  const LinkIcon = iconType === "youtube" ? Youtube : (iconType === "web" ? Globe : ArrowUpRight);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative bg-white border-2 ${borderColor} p-8 rounded-2xl ${shadowColor} transition-transform hover:-translate-y-1 h-full flex flex-col`}
    >
      <div className="flex justify-between items-start mb-4">
         <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase ${isRed ? "bg-[#E63946]" : "bg-black"}`}>
            {data.tag}
         </span>
         
         <a 
           href={data.link} 
           target="_blank" 
           rel="noopener noreferrer"
           className={`p-2 rounded-full border ${borderColor} hover:bg-gray-100 transition-colors`}
         >
            <LinkIcon size={20} className={textColor} />
         </a>
      </div>

      <h3 className={`text-3xl font-black uppercase mb-3 ${textColor}`}>
         {data.title}
      </h3>
      
      <p className="text-gray-600 font-medium mb-6 leading-relaxed flex-grow">
         {data.desc}
      </p>

      <div className="flex flex-wrap gap-2 border-t border-dashed border-gray-300 pt-4 mt-auto">
         {data.tech.map((t: string) => (
            <span key={t} className="px-2 py-1 bg-[#F9F7F2] border border-gray-200 rounded text-xs font-bold uppercase text-gray-500">
               {t}
            </span>
         ))}
      </div>
    </motion.div>
  );
}