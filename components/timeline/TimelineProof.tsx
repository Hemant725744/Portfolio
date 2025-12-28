"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { X, Download, ZoomIn } from "lucide-react";

// 1. FONT CONFIG
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({ subsets: ["latin"] });

// --- HELPER: CLICKABLE IMAGE CARD ---
const ProofImage = ({ src, alt, onClick }: { src: string, alt: string, onClick: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="relative group cursor-pointer w-full h-auto rounded-lg overflow-hidden border border-white/10 shadow-lg bg-neutral-900"
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" 
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white flex items-center gap-2 text-sm font-bold tracking-wider">
        <ZoomIn size={16} /> VIEW
      </div>
    </div>
  </motion.div>
);

// --- HELPER: DESCRIPTION CARD (Updated Logic) ---
const DescriptionCard = ({ 
  title, 
  date, 
  desc, 
  bgImage, 
  darkMode = false 
}: { 
  title: string, 
  date: string, 
  desc: string, 
  bgImage: string, 
  darkMode?: boolean 
}) => (
  <div className="relative w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden border border-black/10 shadow-2xl">
    
    {/* 1. Dynamic Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url('${bgImage}')` }}
    />

    {/* 2. Content */}
    <div className="relative z-20 p-8 md:p-12 text-center">
      {/* TITLE: Checks darkMode prop */}
      <h2 className={`
        ${playfair.className} text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide 
        ${darkMode ? 'text-white' : 'text-black'}
      `}>
        {title}
      </h2>
      
      {/* DATE: Checks darkMode prop */}
      <div className={`
        text-sm font-mono mb-6 tracking-[0.2em] uppercase font-bold
        ${darkMode ? 'text-gray-300' : 'text-gray-800'}
      `}>
        {date}
      </div>
      
      {/* DESCRIPTION: Checks darkMode prop */}
      <p className={`
        leading-relaxed text-sm md:text-base max-w-2xl mx-auto font-medium
        ${darkMode ? 'text-gray-200' : 'text-black'}
      `}>
        {desc}
      </p>
    </div>
  </div>
);

export default function TimelineProof() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className={inter.className}>
      
      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <div 
              className="relative max-w-7xl max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImg} 
                className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl border border-white/10"
              />
              <div className="mt-6 flex gap-4">
                <a 
                  href={selectedImg} 
                  download 
                  className="flex items-center gap-2 bg-[#E2F800] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors"
                >
                  <Download size={18} /> Download Original
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ================= SECTION 1: SEMS WELFARE FOUNDATION (Black BG) ================= */}
      <div className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Description Card (Standard Mode: Black Text) */}
          <DescriptionCard 
            title="SEMS WELFARE FOUNDATION | IT Intern"
            date="Jan 2025 – Jul 2025"
            desc="Actively contributing to several live projects while consistently meeting daily task deadlines. Gained hands-on experience in real-world software development environments, enhancing technical skills, time management, and team collaboration through regular project-based work and IT support responsibilities."
            bgImage="/timeproof.png"
            darkMode={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <ProofImage src="/SWF.jpg" alt="SEMS Certificate" onClick={() => setSelectedImg("/SWF.jpg")} />
            <ProofImage src="/InternOfMonth.jpg" alt="Intern Award" onClick={() => setSelectedImg("/InternOfMonth.jpg")} />
            <ProofImage src="/LOR.jpg" alt="Letter of Recommendation" onClick={() => setSelectedImg("/LOR.jpg")} />
          </div>

        </div>
      </div>


      {/* ================= SECTION 2: ACMEGRADE (White BG) ================= */}
      <div className="bg-white text-black py-24 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Description Card (Dark Mode: White Text) */}
          <DescriptionCard 
            title="ACMEGRADE & MOOD INDIGO (IIT BOMBAY) | Web Dev Intern"
            date="Feb 2024 – Apr 2024"
            desc="Built interactive web pages using Reactjs, Bootstrap, and JavaScript, enhancing website interactivity and improving user retention by 30% during testing. Strengthened problem-solving abilities and deepened understanding of web architecture, contributing to practical, user-focused development."
            bgImage="/timeproofblack.png"
            darkMode={true} 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <ProofImage src="/Acecompletion.jpg" alt="Completion Cert" onClick={() => setSelectedImg("/Acecompletion.jpg")} />
            <ProofImage src="/AcmegradeLOR.png" alt="Recommendation Letter" onClick={() => setSelectedImg("/AcmegradeLOR.png")} />
            <ProofImage src="/AceInternship.jpg" alt="Internship Cert" onClick={() => setSelectedImg("/AceInternship.jpg")} />
            
          </div>

        </div>
      </div>


      {/* ================= SECTION 3: TG CONNECT (Black BG) ================= */}
      <div className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-12">
          
          <div className="w-full md:w-1/2">
             <ProofImage src="/TG.png" alt="TG Connect Certificate" onClick={() => setSelectedImg("/TG.png")} />
          </div>

          <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden border border-black/10 shadow-2xl h-full min-h-[400px] flex flex-col justify-center">
             <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/timeproof.png')" }}
             />
             
             {/* TG Connect Text (Standard Mode: Black Text) */}
             <div className="relative z-20 p-8 md:p-12 text-left">
                <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide text-black`}>
                  TG CONNECT | Web Dev Intern
                </h2>
                <div className="text-sm font-mono text-gray-800 mb-6 tracking-[0.2em] uppercase font-bold">
                  Jan 2024 – Feb 2024
                </div>
                <p className="text-black leading-loose text-sm md:text-base font-medium">
                  Developed dynamic web applications using PHP, Bootstrap, and MySQL, with a focus on user experience and efficient data management. Contributed to backend development, query optimization (80% improvement in data retrieval speed), and gained exposure to research, operations, and process workflows in full-stack web development.
                </p>
             </div>
          </div>

        </div>
      </div>

    </section>
  );
}