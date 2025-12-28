"use client";

import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import { Cinzel } from "next/font/google";

// Import "Victory" Font
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function TrophyNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex justify-between items-center bg-[#050505]/90 backdrop-blur-md border-b border-[#D4AF37]/30">
      
      {/* Brand: Gold Text */}
      <div className={`${cinzel.className} flex items-center gap-2 text-xl md:text-2xl text-[#D4AF37] font-bold tracking-widest`}>
        <Trophy size={24} className="text-[#D4AF37]" />
        <span>TROPHY ROOM</span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-xs md:text-sm text-[#D4AF37] tracking-[0.2em] uppercase hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return to Base</span>
        </Link>
      </div>
    </nav>
  );
}