"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function ProjectNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-[#F9F7F2]/90 backdrop-blur-sm border-b-2 border-black flex justify-between items-center font-sans">
      
      {/* 1. LOGO (Left) */}
      <div className="flex items-center gap-2">
         <div className="bg-[#E63946] text-white p-1 rounded-sm">
            <Star className="fill-white" size={18} />
         </div>
         <span className="text-2xl font-black tracking-tighter text-black uppercase">
            HB<span className="text-[#E63946]">.LABS</span>
         </span>
      </div>

      {/* 2. CENTER DECOR (Hidden on mobile) */}
      <div className="hidden md:block w-32 h-[2px] bg-black/10" />

      {/* 3. BACK BUTTON (Right) */}
      <Link 
        href="/" 
        className="flex items-center gap-2 text-black hover:text-[#E63946] transition-colors group font-bold tracking-wide text-sm"
      >
        <span className="hidden md:inline group-hover:underline decoration-2 underline-offset-4">RETURN TO HOME</span>
        <div className="p-2 rounded-full border-2 border-black group-hover:bg-[#E63946] group-hover:border-[#E63946] group-hover:text-white transition-all">
           <ArrowLeft size={16} />
        </div>
      </Link>

    </nav>
  );
}