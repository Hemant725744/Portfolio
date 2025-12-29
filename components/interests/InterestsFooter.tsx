"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDFBF7] pt-12 pb-20 border-t border-[#2F3E2F]/10 relative z-30">
        
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">
            
            {/* 1. Thematic Divider / Status Text */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="flex flex-col items-center gap-2"
            >
                <div className="w-px h-8 bg-[#556B2F]/30" /> {/* Vertical Line */}
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#556B2F] uppercase font-bold">
                    // END_OF_LOG
                </span>
            </motion.div>


            {/* 2. The Centerpiece Video */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-2xl border border-[#2F3E2F]/10 bg-black"
            >
                {/* Overlay: Adds a slight vintage tint that vanishes on hover */}
                <div className="absolute inset-0 bg-[#556B2F]/10 pointer-events-none z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                
                <video
                    src="/interestfooter.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover "
                />
            </motion.div>


            {/* 3. Final Sign-off */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-[#2F3E2F]/40 font-serif italic text-sm mt-4"
            >
                HB.EXE is now sleeping...
            </motion.div>

        </div>
    </footer>
  );
}