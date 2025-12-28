"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

// 1. FONT CONFIG
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"], 
});

const inter = Inter({ subsets: ["latin"] });

// 2. YOUR SPECIFIC DATA (Order Preserved)
const timelineData = [
  {
    year: "Jan 2024 – Feb 2024",
    role: "Web Development Intern",
    company: "TG CONNECT",
    desc: "Developed client-facing interfaces and optimized frontend performance.",
  },
  {
    year: "Feb 2024 – Apr 2024",
    role: "Web Development Intern",
    company: "ACMEGRADE (IIT BOMBAY)",
    desc: "Partnered with Mood Indigo. Built responsive web modules for event management.",
  },
  {
    year: "Jan 2025 – Jul 2025",
    role: "IT Intern",
    company: "SEMS WELFARE FOUNDATION",
    desc: "Contributed to IT infrastructure and digital welfare initiatives.",
  }
];

export default function TimelineBody() {
  return (
    <div className={`min-h-screen bg-white text-black flex items-center justify-center overflow-x-hidden ${inter.className}`}>
      
      {/* --- CONTAINER --- */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        
        {/* --- TIMELINE WRAPPER --- */}
        {/* FIX: Used fixed height 'md:h-[500px]' so alignment is rigid and doesn't float */}
        <div className="relative flex flex-col md:flex-row md:h-[500px] md:items-center">
          
          {/* THE HORIZONTAL LINE (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-black/20 -translate-y-1/2 z-0" />
          
          {/* THE VERTICAL LINE (Mobile Only) */}
          <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-[1px] bg-black/20 z-0" />

          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              // FIX: Added 'h-full' so the column takes up the full 500px height
              className="relative z-10 w-full md:w-1/3 h-full flex md:justify-center pl-6 md:pl-0 mb-12 md:mb-0"
            >
              
              {/* THE NODE (Diamond) */}
              {/* This is pinned to the center line. It will not move. */}
              <div className="
                absolute left-0 top-2 
                md:left-1/2 md:top-1/2 
                w-[15px] h-[15px] bg-black border border-black rotate-45 
                md:-translate-x-1/2 md:-translate-y-1/2 z-20
              " />

              {/* THE CARD CONTENT */}
              {/* FIX: Removed 'absolute' from here. Used Flexbox to push text to Top or Bottom. */}
              <div className={`
                flex flex-col md:items-center md:text-center w-full h-full
                ${index % 2 === 0 
                  ? " md:justify-start md:pt-16" // Even: Pushed to TOP (ends at padding)
                  : "md:justify-end md:pb-16" // Odd: Pushed to BOTTOM (starts at padding)
                } 
              `}>
                
                {/* Year Tag */}
                <span className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase mb-2 block">
                  {item.year}
                </span>

                {/* Role */}
                <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold text-black mb-2 leading-tight`}>
                  {item.role}
                </h2>

                {/* Company */}
                <h3 className="text-sm md:text-base text-gray-700 italic font-serif mb-4 border-b border-black/10 pb-2 inline-block">
                  {item.company}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-800 leading-relaxed max-w-xs mx-auto opacity-80">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
}