"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, MapPin, Award } from "lucide-react";
import { Cinzel } from "next/font/google";

// Load the Trophy-specific font
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

export default function TrophyFooter() {
  return (
    <footer className="w-full bg-[#020202] pt-24 pb-12 border-t border-[#D4AF37]/20 relative z-30 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* === MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
            
            {/* --- LEFT COLUMN: BIO & STATUS --- */}
            <div className="space-y-8">
                {/* Logo Area - Gold Theme */}
                <div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 bg-black flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <img src="/logo.png" alt="HB Logo" className="w-full h-full object-cover p-1 opacity-90" />
                </div>

                <div className="space-y-3 max-w-md">
                    {/* Using Cinzel font for the name/title */}
                    <h2 className={`${cinzel.className} text-2xl text-[#D4AF37] font-bold tracking-wide`}>
                        HEMANT BHATT
                    </h2>
                    <p className="text-gray-500 font-sans text-sm leading-relaxed tracking-wide">
                        Final Year Computer Engineering Student. <br />
                        Striving for excellence in every line of code. <br />
                        <span className="italic text-[#D4AF37]/80">"Excellence is not an act, but a habit."</span>
                    </p>
                </div>

                {/* BADGE: "Open to Work" (Gold Luxury Theme) */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-sm border border-[#D4AF37]/40 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_10px_rgba(212,175,55,0.1)] cursor-default"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                    </span>
                    OPEN TO WORK
                </motion.div>
            </div>

            {/* --- RIGHT COLUMN: CONNECT LINKS --- */}
            <div className="md:flex md:justify-end">
                <div className="space-y-8 min-w-[200px]">
                    <h3 className={`${cinzel.className} text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase border-b border-[#D4AF37]/20 pb-4`}>
                        Alliance
                    </h3>
                    
                    <div className="flex flex-col gap-5 font-sans">
                        {[
                            { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/hemantbhatt19" },
                            { name: "GitHub", icon: Github, href: "https://github.com/Hemant725744" },
                            { name: "Email", icon: Mail, href: "mailto:bhatthemant268@gmail.com" },
                            { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/8591140896" }
                        ].map((item, idx) => (
                            <a key={idx} href={item.href} className="flex items-center gap-4 text-gray-500 hover:text-[#D4AF37] transition-all group">
                                <div className="p-2 border border-white/5 rounded-full group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                                    <item.icon size={18} />
                                </div>
                                <span className="font-medium text-sm tracking-widest uppercase">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono text-gray-600 uppercase tracking-widest">
            <p>© 2026 SYSTEM SECURE // GALLERY</p>
            <p className="flex items-center gap-2">
                <MapPin size={12} className="text-[#D4AF37]" />
                <span>Mumbai, IN</span>
            </p>
        </div>

      </div>
    </footer>
  );
}