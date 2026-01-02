"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, MapPin, Layers } from "lucide-react";

export default function ProjectsFooter() {
  return (
    <footer className="w-full bg-[#F9F7F2] pt-20 pb-10 border-t-4 border-[#1D3557] relative z-30 font-sans text-[#1D3557]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* === MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
            
            {/* --- LEFT COLUMN: BRAND & STATUS --- */}
            <div className="space-y-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden shadow-xl ring-4 ring-white">
                    <img src="/logo.png" alt="HB Logo" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-2 max-w-md">
                    <p className="text-gray-700 font-medium leading-relaxed text-lg">
                        Final Year Computer Engineering Student. <br />
                        <span className="text-black font-bold">Full-Stack Developer.</span> Problem Solver. <br />
                        Open to exciting opportunities and collaborations!
                    </p>
                </div>

                {/* BADGE: "Open to Work" (Technical/Blueprint Theme) */}
                <motion.div 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#1D3557] text-white text-xs font-bold tracking-widest uppercase shadow-[4px_4px_0px_#E63946] cursor-default"
                >
                    <div className="w-2 h-2 bg-[#E63946] rounded-full animate-pulse" />
                    STATUS: OPEN FOR WORK
                </motion.div>
            </div>

            {/* --- RIGHT COLUMN: CONNECT LINKS --- */}
            <div className="md:flex md:justify-end">
                <div className="space-y-8 min-w-[200px]">
                    <h3 className="text-xs font-black tracking-[0.2em] text-[#E63946] uppercase border-b-2 border-[#1D3557]/10 pb-4">
                        Coordinates
                    </h3>
                    
                    <div className="flex flex-col gap-5">
                        {[
                            { name: "LinkedIn",  href: "https://linkedin.com/in/hemantbhatt19", icon: Linkedin },
                            { name: "GitHub", href: "https://github.com/Hemant725744", icon: Github },
                            { name: "Email",  href: "mailto:bhatthemant268@gmail.com",icon: Mail },
                            { name: "WhatsApp", href: "https://wa.me/91725744268", icon: MessageCircle }
                        ].map((item, idx) => (
                            <a key={idx} href={item.href} className="flex items-center gap-4 text-[#1D3557]/60 hover:text-[#1D3557] transition-all group">
                                <div className="p-2 border border-[#1D3557]/20 group-hover:bg-[#1D3557] group-hover:text-white transition-colors">
                                    <item.icon size={16} />
                                </div>
                                <span className="font-bold text-sm tracking-wide">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-[#1D3557]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold text-[#1D3557]/50 uppercase tracking-widest">
            <p>Designed & Built by Hemant Bhatt © 2026</p>
            <p className="flex items-center gap-2">
                <MapPin size={12} className="text-[#E63946]" />
                <span>Mumbai, IN</span>
            </p>
        </div>

      </div>
    </footer>
  );
}