"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";

export default function TimelineFooter() {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-10 border-t border-white/10 relative z-30 font-sans text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* === MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
            
            {/* --- LEFT COLUMN: BIO & STATUS --- */}
            <div className="space-y-8">
                {/* Logo Placeholder - Matches the geometric logo in your image */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
                     {/* Replace with your geometric logo if different */}
                    <img src="/logo.png" alt="HB Logo" className="w-full h-full object-cover p-1" />
                </div>

                <div className="space-y-2 max-w-md text-sm md:text-base text-gray-400 font-light leading-relaxed">
                    <p>Final Year Computer Engineering Student.</p>
                    <p>Full-Stack Developer. Problem Solver.</p>
                    <p>Open to exciting opportunities and collaborations!</p>
                </div>

                {/* BADGE: "Open to Work" (Green Theme as per image) */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0F1C15] border border-green-900/50 text-green-500 text-xs font-bold tracking-widest uppercase cursor-default"
                >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    OPEN TO WORK
                </motion.div>
            </div>

            {/* --- RIGHT COLUMN: CONNECT LINKS --- */}
            <div className="md:flex md:justify-end">
                <div className="space-y-8 min-w-[200px]">
                    <h3 className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-6">
                        CONNECT
                    </h3>
                    
                    <div className="flex flex-col gap-5">
                        {[
                            { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/hemantbhatt19" },
                            { name: "GitHub", icon: Github, href: "https://github.com/Hemant725744" },
                            { name: "Email", icon: Mail, href: "mailto:bhatthemant268@gmail.com" },
                            { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/8591140896" }
                        ].map((item, idx) => (
                            <a 
                                key={idx} 
                                href={item.href} 
                                className="flex items-center gap-4 text-gray-400 hover:text-white transition-all group"
                            >
                                <div className="p-2 border border-white/10 rounded-full group-hover:border-white/30 group-hover:bg-white/5 transition-colors">
                                    <item.icon size={18} />
                                </div>
                                <span className="font-medium text-sm tracking-wide">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-600 uppercase tracking-widest font-mono">
            <p>© 2026 Hemant Bhatt. All Systems Nominal.</p>
            <p className="flex items-center gap-2">
                <span className="text-gray-500">LOC:</span> Mumbai, IN
            </p>
        </div>

      </div>
    </footer>
  );
}