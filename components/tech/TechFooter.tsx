"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, MapPin, Activity } from "lucide-react";

export default function TechFooter() {
  return (
    <footer className="w-full bg-black border-t border-green-500/20 font-mono text-green-500/80 relative z-30">
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        
        {/* === MAIN CONTENT GRID (3 COLUMNS) === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-center">
            
            {/* --- 1. LEFT COLUMN: SYSTEM IDENTITY --- */}
            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Logo Area */}
                <div className="w-16 h-16 bg-black border border-green-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <img src="/logo.png" alt="HB Logo" className="w-full h-full object-cover p-1 opacity-80" />
                </div>

                <div className="space-y-2 text-sm leading-relaxed">
                    <p><span className="text-green-400 font-bold">&gt;</span> Final Year Comp Eng.</p>
                    <p><span className="text-green-400 font-bold">&gt;</span> Full-Stack Developer.</p>
                    <p><span className="text-green-400 font-bold">&gt;</span> Executing innovations.</p>
                </div>

                {/* BADGE */}
                <motion.div 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-3 px-4 py-2 border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-widest uppercase cursor-pointer"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    STATUS: ONLINE
                </motion.div>
            </div>


            {/* --- 2. CENTER COLUMN: VIDEO FEED --- */}
            <div className="flex flex-col items-center justify-center w-full">
                <div className="relative w-full max-w-sm h-48 rounded-sm overflow-hidden ">
                    
                    {/* The Video */}
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover "
                    >
                      <source src="/TECHFOOTER.mp4" type="video/mp4" />
                    </video>

                   
                    
                </div>
                
                <div className="flex items-center gap-2 mt-4 text-xs text-green-500/50">
                    <Activity size={14} className="animate-pulse" />
                    <span>SYSTEM_CORE_OPERATIONAL</span>
                </div>
            </div>


            {/* --- 3. RIGHT COLUMN: UPLINKS --- */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
                <h3 className="text-xs font-bold tracking-[0.2em] text-green-500 uppercase border-b border-green-500/30 pb-2">
                    // SECURE_LINKS
                </h3>
                
                <div className="flex flex-col gap-4 w-full max-w-[200px]">
                    {[
                        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/hemantbhatt19" },
                            { name: "GitHub", icon: Github, href: "https://github.com/Hemant725744" },
                            { name: "Email", icon: Mail, href: "mailto:bhatthemant268@gmail.com" },
                            { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/8591140896" }
                    ].map((item, idx) => (
                        <a key={idx} href={item.href} className="flex items-center justify-end gap-4 text-green-500/60 hover:text-green-400 transition-all group">
                            <span className="font-bold text-sm tracking-wide group-hover:-translate-x-1 transition-transform">
                                {item.name}
                            </span>
                            <div className="p-2 border border-green-500/20 group-hover:bg-green-500/10 group-hover:border-green-500/50 transition-colors">
                                <item.icon size={16} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-green-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-green-500/40 uppercase tracking-widest">
            <p>
                <span className="text-green-500">&gt;</span> SYSTEM.COPYRIGHT(2026);
            </p>
            <p className="flex items-center gap-2">
                <MapPin size={12} className="text-green-500" />
                <span>SERVER_LOC: MUMBAI, IN</span>
            </p>
        </div>

      </div>
    </footer>
  );
}