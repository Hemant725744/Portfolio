"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutNavbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-20 md:h-24 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-6 md:px-12"
    >
      
      {/* ================= LEFT: DEV PERSONA (LOGO + HB.DEV) ================= */}
      <div className="flex items-center gap-3 group cursor-default">
        {/* LOGO CONTAINER */}
        <div className="w-20 h-20 rounded-md flex items-center justify-center overflow-hidden ">
            {/* Replace '/logo.png' with your actual file name */}
            <img 
              src="/logo.png" 
              alt="HB Logo" 
              className="w-full h-full object-cover" 
            />
        </div>
       
      </div>


      {/* ================= CENTER: TITLE ================= */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="font-sans text-2xl md:text-3xl font-black text-black tracking-tighter hidden md:block">
          PERSONNEL<span className="text-rose-500">.</span>FILE
        </span>
      </div>


      {/* ================= RIGHT: RETURN TO BASE ================= */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex flex-col items-end">
           <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-black uppercase group-hover:opacity-70 transition-opacity">
             Return
           </span>
           <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-rose-500 uppercase hidden md:block">
             To Base
           </span>
        </div>
        
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:border-rose-500 transition-all">
          <ArrowLeft size={14} className="text-black group-hover:text-white transition-colors" />
        </div>
      </Link>

    </motion.nav>
  );
}