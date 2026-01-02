"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function ProjectNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-[#F9F7F2]/90 backdrop-blur-sm border-b-2 border-black flex justify-between items-center font-sans">
      
      {/* 1. LOGO (Left) */}
     {/* LOGO CONTAINER */}
        <div className="w-20 h-17 rounded-md flex items-center justify-center overflow-hidden ">
            {/* Replace '/logo.png' with your actual file name */}
            <img 
              src="/logo.png" 
              alt="HB Logo" 
              className="w-full h-full object-cover bg-[#F9F7F2]/90 " 
            />
        </div>

      {/* 2. CENTER DECOR (Hidden on mobile) */}
      <div className="hidden md:block w-32 h-[2px] bg-black/10" />

      {/* 3. BACK BUTTON (Right) */}
      <Link 
        href="/" 
        className="flex items-center gap-2 text-black hover:text-[#E63946] transition-colors group font-bold tracking-wide text-sm"
      >
       <div className="flex flex-col items-end">
           <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#3e2f2f] uppercase group-hover:opacity-70 transition-opacity">
             Return
           </span>
           <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#E63946] uppercase hidden md:block">
             To Base
           </span>
        </div>
        <div className="p-2 rounded-full border-2 border-black group-hover:bg-[#E63946] group-hover:border-[#E63946] group-hover:text-white transition-all">
           <ArrowLeft size={16} />
        </div>
      </Link>

    </nav>
  );
}