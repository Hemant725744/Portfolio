"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { X, Download, ZoomIn } from "lucide-react";

// 1. FONTS
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });
const inter = Inter({ subsets: ["latin"] });

// 2. TYPES
type InternshipData = {
  id: string;
  company: string;
  role: string;
  date: string;
  theme: "black" | "white"; // Controls text/bg color
  bgImage: string; // For the description card
  description: string;
  images: { src: string; alt: string }[];
};

// 3. DATA: ALL IN ONE PLACE
const careerData: InternshipData[] = [
  {
    id: "sems",
    company: "SEMS Welfare Foundation",
    role: "IT Intern",
    date: "Jan 2025 – Jul 2025",
    theme: "black",
    bgImage: "/timeproof.png",
    description: "Actively contributing to several live projects while consistently meeting daily task deadlines. Gained hands-on experience in real-world software development environments, enhancing technical skills, time management, and team collaboration through regular project-based work and IT support responsibilities.",
    images: [
      { src: "/SWF.jpg", alt: "SEMS Certificate" },
      { src: "/InternOfMonth.jpg", alt: "Intern Award" },
      { src: "/LOR.jpg", alt: "Letter of Recommendation" },
    ]
  },
  {
    id: "acme",
    company: "Acmegrade (IIT Bombay)",
    role: "Web Development Intern",
    date: "Feb 2024 – Apr 2024",
    theme: "white",
    bgImage: "/timeproofblack.png",
    description: "Built interactive web pages using Reactjs, Bootstrap, and JavaScript, enhancing website interactivity and improving user retention by 30% during testing. Strengthened problem-solving abilities and deepened understanding of web architecture, contributing to practical, user-focused development.",
    images: [
      { src: "/Acecompletion.jpg", alt: "Completion Cert" },
      { src: "/AceInternship.jpg", alt: "Internship Cert" },
      { src: "/AcmegradeLOR.png", alt: "Recommendation Letter" },
    ]
  },
  {
    id: "tg",
    company: "TG Connect",
    role: "Web Development Intern",
    date: "Jan 2024 – Feb 2024",
    theme: "black",
    bgImage: "/timeproof.png",
    description: "Developed dynamic web applications using PHP, Bootstrap, and MySQL, with a focus on user experience and efficient data management. Contributed to backend development, query optimization (80% improvement in data retrieval speed), and gained exposure to research, operations, and process workflows in full-stack web development.",
    images: [
      { src: "/TG.png", alt: "TG Connect Certificate" }
    ]
  }
];

// --- SUB-COMPONENT: PROOF IMAGE ---
const ProofImage = ({ src, alt, onClick }: { src: string, alt: string, onClick: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="relative group cursor-pointer w-full h-auto rounded-lg overflow-hidden border border-black/10 shadow-lg bg-neutral-900"
  >
    <img src={src} alt={alt} className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white flex items-center gap-2 text-sm font-bold tracking-wider">
        <ZoomIn size={16} /> VIEW
      </div>
    </div>
  </motion.div>
);

export default function TimelineUnified() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className={`${inter.className} w-full`}>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><X size={32} /></button>
            <div className="relative max-w-7xl max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={selectedImg} className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl border border-white/10" />
              <div className="mt-6 flex gap-4">
                <a href={selectedImg} download className="flex items-center gap-2 bg-[#E2F800] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">
                  <Download size={18} /> Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN LOOP --- */}
      {careerData.map((job) => (
        <div 
          key={job.id} 
          className={`
            relative w-full py-24 px-6 border-b border-black/10
            ${job.theme === "black" ? "bg-black text-white" : "bg-white text-black"}
          `}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
            
            {/* --- LEFT COLUMN: STICKY INFO (35%) --- */}
            <div className="w-full md:w-[35%]">
              <div className="md:sticky md:top-32">
                <div className="flex items-center gap-4 mb-4">
                   {/* Decorative Line */}
                   <div className={`h-[2px] w-12 ${job.theme === "black" ? "bg-white" : "bg-black"}`} />
                   <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase opacity-70">
                     {job.date}
                   </span>
                </div>
                
                <h2 className={`${playfair.className} text-4xl md:text-6xl font-black leading-tight mb-4`}>
                  {job.company}
                </h2>
                <h3 className={`text-xl md:text-2xl font-serif italic opacity-80 ${job.theme === "black" ? "text-gray-400" : "text-gray-600"}`}>
                  {job.role}
                </h3>
              </div>
            </div>

            {/* --- RIGHT COLUMN: CONTENT STREAM (65%) --- */}
            <div className="w-full md:w-[65%] flex flex-col gap-12">
              
              {/* 1. DESCRIPTION CARD */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full rounded-xl overflow-hidden border border-black/10 shadow-2xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url('${job.bgImage}')` }}
                />
                <div className="relative z-20 p-8 md:p-12">
                   <p className={`
                     leading-loose text-base md:text-lg font-medium text-center
                     ${job.theme === "white" ? "text-white" : "text-black"} 
                   `}>
                     {/* Note: ACME (white theme) uses black bg image, so text must be white. 
                         SEMS (black theme) uses light bg image, so text must be black. 
                         This reverses the logic intentionally for contrast. */}
                     {job.description}
                   </p>
                </div>
              </motion.div>

              {/* 2. PROOF GALLERY */}
              <div className={`grid grid-cols-1 ${job.images.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
                {job.images.map((img, idx) => (
                  <ProofImage 
                    key={idx} 
                    src={img.src} 
                    alt={img.alt} 
                    onClick={() => setSelectedImg(img.src)} 
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      ))}

    </section>
  );
}