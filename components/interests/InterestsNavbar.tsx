"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Gamepad2, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-20 md:h-20 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#2F3E2F]/10 flex items-center justify-between px-6 md:px-12"
    >
      
      {/* ================= LEFT: GAMING PERSONA (HB.EXE) ================= */}
      <div className="flex items-center gap-2 group cursor-default">
        <div className="w-8 h-8 rounded-md bg-[#2F3E2F] flex items-center justify-center">
            <Terminal size={16} className="text-[#FDFBF7]" />
        </div>
        <div className="flex flex-col">
           <span className="font-mono text-lg font-black tracking-tighter text-[#2F3E2F] leading-none">
             HB.EXE
           </span>
           <span className="font-mono text-[9px] font-bold tracking-widest text-[#556B2F] uppercase animate-pulse">
             RUNNING...
           </span>
        </div>
      </div>


      {/* ================= CENTER: LOGO (Absolute Center) ================= */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
        <Gamepad2 strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8 text-[#556B2F]" />
        <span className="font-serif text-2xl md:text-3xl font-black text-[#2F3E2F] tracking-tighter hidden md:block">
          OFF<span className="text-[#556B2F]">.</span>DUTY
        </span>
      </div>


      {/* ================= RIGHT: RETURN TO BASE ================= */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex flex-col items-end">
           <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2F3E2F] uppercase group-hover:opacity-70 transition-opacity">
             Return
           </span>
           <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#556B2F] uppercase hidden md:block">
             To Base
           </span>
        </div>
        
        {/* Arrow pointing Right to indicate "Exiting" or "Moving On" */}
        <div className="w-8 h-8 rounded-full border border-[#2F3E2F]/20 flex items-center justify-center group-hover:bg-[#2F3E2F] group-hover:border-[#2F3E2F] transition-all">
          <ArrowLeft size={14} className="text-[#2F3E2F] group-hover:text-[#FDFBF7] transition-colors" />
        </div>
      </Link>

    </motion.nav>
  );
}