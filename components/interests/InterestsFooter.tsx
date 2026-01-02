"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, MapPin, Coffee, Gamepad2 } from "lucide-react";

export default function InterestFooter() {
  return (
    <footer className="w-full bg-[#FDFBF7] border-t border-[#556B2F]/20 font-sans text-[#2F3E2F] relative z-30">
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        
        {/* === MAIN CONTENT GRID (3 COLUMNS) === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-center">
            
            {/* --- 1. LEFT COLUMN: IDENTITY --- */}
            <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Logo Area - Organic/Soft Look */}
                <div className="w-16 h-16 bg-white border border-[#556B2F]/20 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_#556B2F] ">
                    <img src="/logo.png" alt="HB Logo" className="w-full h-full object-cover p-1 opacity-90" />
                </div>

                <div className="space-y-2 text-sm leading-relaxed font-serif italic text-[#2F3E2F]/80">
                    <p>Storyteller by night.</p>
                    <p>Gamer on weekends.</p>
                    <p>Creative soul always.</p>
                </div>

                {/* BADGE: "Offline Mode" (Vintage Stamp Style) */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-5 py-2 bg-[#556B2F] text-[#FDFBF7] text-xs font-bold tracking-widest uppercase rounded-full shadow-lg cursor-default"
                >
                    <Gamepad2 size={14} />
                    STATUS: AFK / RECHARGING
                </motion.div>
            </div>


            {/* --- 2. CENTER COLUMN: VIDEO MEMORY --- */}
            <div className="flex flex-col items-center justify-center w-full">
                {/* Video Frame - Styled like a Picture/Polaroid */}
                <div className="relative w-full max-w-sm h-48 bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                    
                    {/* The Video */}
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover "
                    >
                      <source src="/interestfooter.mp4" type="video/mp4" />
                    </video>

               
                    
                   
                </div>
                
              
            </div>


            {/* --- 3. RIGHT COLUMN: SOCIALS --- */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
                <h3 className="text-xs font-bold tracking-[0.3em] text-[#556B2F] uppercase border-b border-[#556B2F]/20 pb-2">
                    Social Channels
                </h3>
                
                <div className="flex flex-col gap-4 w-full max-w-[200px]">
                    {[
                        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
                            { name: "GitHub", icon: Github, href: "https://github.com" },
                            { name: "Email", icon: Mail, href: "mailto:bhatthemant268@gmail.com" },
                            { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/8591140896" }
                    ].map((item, idx) => (
                        <a key={idx} href={item.href} className="flex items-center justify-end gap-4 text-[#2F3E2F]/60 hover:text-[#556B2F] transition-all group">
                            <span className="font-bold text-sm tracking-wide font-serif group-hover:-translate-x-1 transition-transform">
                                {item.name}
                            </span>
                            <div className="p-2 bg-white border border-[#2F3E2F]/10 rounded-full group-hover:bg-[#556B2F] group-hover:text-white group-hover:border-[#556B2F] transition-colors shadow-sm">
                                <item.icon size={16} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-[#556B2F]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-[#2F3E2F]/50 uppercase tracking-widest font-sans">
            <p>
                Hemant Bhatt © 2026. All Rights Reserved.
            </p>
            <p className="flex items-center gap-2">
                <MapPin size={12} className="text-[#556B2F]" />
                <span>Mumbai, IN</span>
            </p>
        </div>

      </div>
    </footer>
  );
}