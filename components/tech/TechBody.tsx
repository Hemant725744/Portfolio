"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. YOUR ACTUAL SKILLS DATA ---
const skillData = {
  
  CORE: [
  "Java",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "Data Structures",
  "Object-Oriented Programming (OOP)",
  "Problem Solving",
  "Algorithms (Basics)"
],
  
  FRONTEND: [
  "React.js",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive Web Design",
  "Framer Motion",
  "GSAP",
  "React Hooks",
  "Component-Based Architecture",
  "UI/UX Optimization",
  "Cross-Browser Compatibility"
],
  
  BACKEND: [
  "Node.js",
  "Express.js",
  "PHP",
  "REST APIs",
  "MongoDB",
  "MySQL",
  ,
  "API Integration",
  "Server-Side Logic"
],
TESTING: [
  "Manual Testing",
  "Test Case Design",
  "Unit Testing (Basics)",
  "API Testing",
  "Selenium",
  "Debugging & Bug Tracking"
],
  TOOLS: ["Git & GitHub", "Selenium", "Postman", "VS Code", "XAMPP", "Vercel"]
};

type Category = keyof typeof skillData;

export default function TechBody() {
  const [activeTab, setActiveTab] = useState<Category>("FRONTEND");

  return (
    <div className="min-h-screen bg-[#050505] font-mono text-white overflow-x-hidden pb-20 pt-[68px]">

      {/* ================= SECTION 1: VIDEO HEADER + NEON GRID ================= */}
      <div className="relative w-full h-auto lg:h-[90vh] bg-black border-b border-green-500/20 overflow-hidden">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain lg:object-cover lg:object-bottom opacity-90"
        >
          <source src="/TECH.mp4" type="video/mp4" />
        </video>

        {/* Neon Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-12 md:h-24 bg-gradient-to-t from-[#050505] to-transparent z-10" />
      </div>


      {/* ================= SECTION 2: INTERACTIVE SKILL BOX ================= */}
      <div className="relative w-full py-16 px-4 flex justify-center items-center">
        
        {/* Main Container */}
        <div className="w-full max-w-6xl border border-white/10 bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
          
          {/* --- LEFT SIDE: MENU (NO SCROLL, SHRUNK FONTS) --- */}
          <div className="
            w-full md:w-1/4 
            bg-black 
            border-b md:border-b-0 md:border-r border-white/10 
            flex flex-row md:flex-col
          ">
            {Object.keys(skillData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as Category)}
                className={`
                  flex-1 md:flex-none              /* Split width equally on mobile */
                  py-4 md:py-6                     /* Smaller height on mobile */
                  px-1 md:px-6                     /* Very tight padding on mobile */
                  text-center md:text-left 
                  
                  /* RESPONSIVE FONT SIZING */
                  text-[10px] sm:text-xs md:text-lg 
                  
                  font-bold tracking-widest 
                  transition-all duration-300
                  ${activeTab === category 
                    ? "bg-[#E2F800] text-black shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]" 
                    : "text-gray-500 hover:text-white hover:bg-white/5" 
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>


          {/* --- RIGHT SIDE: DISPLAY SCREEN (YELLOW) --- */}
          <div className="w-full md:w-3/4 p-6 md:p-16 relative bg-[#E2F800] flex flex-col">
            
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000000_1px,transparent_1px)] bg-[size:10px_10px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 h-full flex flex-col justify-center"
              >
                
                {/* BLACK BOXES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 content-center h-full">
                  {skillData[activeTab].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, type: "spring" }}
                      className="w-full py-6 px-4 bg-black text-[#50E3C2] font-black text-lg md:text-xl tracking-[0.15em] uppercase text-center shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all cursor-default border border-transparent hover:border-white/20"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="mt-auto pt-8 flex justify-between items-end text-xs text-black/70 font-bold font-mono uppercase tracking-widest">
                  <span>SYSTEM: ONLINE</span>
                  <span>DIR: /USR/BIN/{activeTab}</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

    </div>
  );
}