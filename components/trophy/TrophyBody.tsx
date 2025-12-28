"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cinzel, Montserrat } from "next/font/google";
import { X, ZoomIn, Cpu, Star, Users, Globe, Award } from "lucide-react";

// 1. FONTS
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// 2. DATA
const trophyData = [
  {
    id: "hall-code",
    title: "Hall of Code",
    subtitle: "Language, Logic & Stack",
    icon: <Cpu className="text-[#D4AF37]" size={28} />,
    bgImage: "/bg-code.jpg",
    description: "Core technical mastery. Certifications in programming languages and full-stack development.",
    certificates: [
      { title: "C++ with DSA", issuer: "Data Structures", img: "/certs/cpp.jpg" },
      { title: "Java Completion", issuer: "Aptech", img: "/certs/java.jpg" },
      { title: "HTML, CSS & JS", issuer: "Web Foundation", img: "/certs/html.jpg" },
      { title: "React.js Specialist", issuer: "Frontend", img: "/certs/react.jpg" },
      { title: "Node & Express", issuer: "Backend", img: "/certs/node.jpg" },
      { title: "Python & IoT", issuer: "Exelr", img: "/certs/python.jpg" },
      { title: "GenAI & ChatGPT", issuer: "Exelr", img: "/certs/genai.jpg" },
      { title: "Cybersecurity", issuer: "Ethical Hacking", img: "/certs/cyber.jpg" },
    ]
  },
  {
    id: "hall-innov",
    title: "Hall of Innovation",
    subtitle: "Hackathons & Research",
    icon: <Star className="text-[#D4AF37]" size={28} />,
    bgImage: "/bg-innov.jpg",
    description: "Excellence in competitive programming, research publications, and innovative problem solving.",
    certificates: [
      { title: "AlgoHackathon", issuer: "Hackathon Winner", img: "/certs/algohack.jpg" },
      { title: "Malad Project Comp", issuer: "Project Showcase", img: "/certs/malad.jpg" },
      { title: "Research Paper", issuer: "Mat Journals", img: "/certs/journal.jpg" },
      { title: "Software Career", issuer: "LinkedIn", img: "/certs/linkedin.jpg" }
    ]
  },
  {
    id: "hall-lead",
    title: "Hall of Leadership",
    subtitle: "Service, Skills & Impact",
    icon: <Users className="text-[#D4AF37]" size={28} />,
    bgImage: "/bg-lead.jpg",
    description: "Internship leadership roles, community service (NSS), and vocational excellence.",
    certificates: [
      { title: "Internship Completion", issuer: "Aptech", img: "/certs/aptech-intern.jpg" },
      { title: "Project Head", issuer: "Aptech Leadership", img: "/certs/projecthead.jpg" },
      { title: "Appreciation", issuer: "DevTown", img: "/certs/devtown.jpg" },
      { title: "Vocational Skill 1", issuer: "Skill India", img: "/certs/skill1.jpg" },
      { title: "Vocational Skill 2", issuer: "Skill India", img: "/certs/skill2.jpg" }
    ]
  },
  {
    id: "hall-global",
    title: "Hall of Global Skills",
    subtitle: "Languages & Communication",
    icon: <Globe className="text-[#D4AF37]" size={28} />,
    bgImage: "/bg-lang.jpg",
    description: "Proficiency in German language and interactive technical communication.",
    certificates: [
      { title: "German A1", issuer: "Language Proficiency", img: "/certs/a1.jpg" },
      { title: "German A2", issuer: "Language Proficiency", img: "/certs/a2.jpg" }
    ]
  }
];

export default function TrophyBody() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    // CHANGE 1: Main BG is Black, Text is White
    <div className={`bg-black text-white ${montserrat.className} min-h-screen w-full pb-32`}>
      
      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-[#D4AF37] transition-colors"><X size={40} /></button>
            <motion.img 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-[90vh] object-contain border-2 border-[#D4AF37] shadow-[0_0_100px_rgba(212,175,55,0.2)] rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO HEADER ================= */}
      <div className="pt-32 pb-24 px-6 text-center relative z-20">
         
         {/* CHANGE 2: Label background changed to subtle dark gray to stand out on black */}
         <h2 className="inline-block bg-white px-6 py-3  text-[#D4AF37] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-8 border border-white/5">
           The Collection
         </h2>

         {/* CHANGE 3: Title text is White */}
         <h1 className={`${cinzel.className} text-5xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-sm`}>
           TROPHY ROOM
         </h1>
         {/* Gold Underline */}
         <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full shadow-[0_0_10px_#D4AF37]" />

         {/* Hero Image */}
         <div className="mt-16 max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-[#D4AF37] opacity-10 blur-[100px] rounded-full -z-10"></div>
            <img 
              src="/trophy-hero.png" 
              alt="Gallery Glance" 
              className="w-full h-auto drop-shadow-2xl rounded-lg border border-white/10"
            />
         </div>
      </div>

      {/* ================= SECTIONS LOOP ================= */}
      <div className="flex flex-col gap-32"> 
        {trophyData.map((hall, index) => (
          <section 
            key={hall.id} 
            className="relative max-w-7xl mx-auto w-full px-6"
          >
            
            {/* 1. HEADER AREA */}
            <div className="flex flex-col items-center text-center mb-12">
                 {/* CHANGE 4: Icon Container adapts to dark mode */}
                 <div className="p-4 rounded-full border border-white/10 mb-6 text-[#D4AF37] bg-white/5 shadow-lg backdrop-blur-sm">
                    {hall.icon}
                 </div>
                 
                 <div className="relative mb-6 inline-block">
                    {/* CHANGE 5: Section Title is White */}
                    <h2 className={`${cinzel.className} text-4xl md:text-6xl font-black text-white relative z-10`}>
                    {hall.title}
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#D4AF37] rounded-full" />
                 </div>

                 {/* CHANGE 6: Description is Light Gray */}
                 <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
                   {hall.description}
                 </p>
            </div>


            {/* 2. GRID CONTAINER */}
            {/* Added white border for separation on black bg */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/5 p-8 md:p-12">
              
              {/* === BACKGROUND IMAGE === */}
              <div className="absolute inset-0 z-0">
                 <img 
                   src={hall.bgImage} 
                   alt="Background" 
                   className="w-full h-full object-cover scale-105" 
                 />
                 <div className="absolute inset-0 bg-black/40 backdrop-blur-[30px]" />
              </div>

              {/* === CERTIFICATES LAYOUT === */}
              <div className="relative z-10 flex flex-wrap justify-center gap-8">
                {hall.certificates.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedImg(cert.img)}
                    className="group cursor-pointer w-full md:w-[320px] flex-grow-0"
                  >
                    {/* CARD STYLE */}
                    <div className="
                      relative flex flex-col h-full w-full rounded-xl overflow-hidden 
                      bg-black/60 backdrop-blur-md border border-white/10 
                      hover:border-[#D4AF37] transition-all duration-500
                      hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
                      transform hover:-translate-y-2
                    ">
                      
                      {/* IMAGE AREA */}
                      <div className="relative z-10 h-48 w-full bg-black/50 border-b border-white/10 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center"><Award className="text-white/20" size={40} /></div>
                        <img src={cert.img} alt={cert.title} className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 z-20 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <ZoomIn className="text-[#D4AF37] drop-shadow-lg" size={32} />
                        </div>
                      </div>

                      {/* TEXT AREA */}
                      <div className="relative z-10 p-5 flex flex-col justify-between flex-grow bg-black/80">
                         <div>
                           <h3 className={`${cinzel.className} text-sm md:text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors`}>
                             {cert.title}
                           </h3>
                           <p className="text-[10px] md:text-[11px] text-gray-400 font-mono uppercase tracking-widest">
                             {cert.issuer}
                           </p>
                         </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </section>
        ))}
      </div>

    </div>
  );
}