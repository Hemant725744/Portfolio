"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function ProjectsFooter() {
  return (
    <footer className="w-full bg-[#F9F7F2] border-t-2 border-[#1D3557] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Brand */}
        <div className="text-center md:text-left">
           <h2 className="text-2xl font-black text-[#1D3557] uppercase">
             HB<span className="text-[#E63946]">.LABS</span>
           </h2>
           <p className="text-xs font-bold tracking-widest text-[#1D3557]/60 mt-1">
             DESIGNED & BUILT BY HEMANT BHATT
           </p>
        </div>

        {/* Center: Decorative Line */}
        <div className="hidden md:block w-32 h-[2px] bg-[#1D3557]/20" />

        {/* Right: Socials */}
        <div className="flex items-center gap-4">
           <Link href="https://github.com/HemantBhatt" className="p-3 bg-white border border-[#1D3557] rounded-full hover:bg-[#1D3557] hover:text-white transition-all shadow-[4px_4px_0px_#E63946]">
              <Github size={20} />
           </Link>
           {/* Placeholder for other social if needed */}
           <div className="w-2 h-2 rounded-full bg-[#E63946]" />
           <span className="text-sm font-bold text-[#1D3557]">© 2025</span>
        </div>

      </div>
    </footer>
  );
}