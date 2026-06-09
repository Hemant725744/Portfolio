"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";

export default function TechNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#0D1117]/90 backdrop-blur-md border-b border-green-500/20">
      
      {/* 1. Brand: Responsive Text Switching */}
        <div className="w-20 h-17 rounded-md flex items-center justify-center overflow-hidden ">
            {/* Replace '/logo.png' with your actual file name */}
            <img 
              src="/logo.png" 
              alt="HB Logo" 
              className="w-full h-full object-cover bg-[#0D1117]/90" 
            />
        </div>

        {/* ================= CENTER: TITLE ================= */}
      {/* Status Indicator */}
            <div className="inline-flex ml-0 lg:ml-40 items-center gap-3 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-sm font-medium text-green-400 tracking-wide uppercase">Open to Work</span>
            </div>

      {/* 2. Navigation: Tighter gaps and smaller text on mobile */}
      <div className="flex gap-3 md:gap-6 font-mono text-[15px] md:text-md">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
        >
          <span className="text-green-600">$</span> cd /root
        </Link>
        
        <a 
          href="/Hemant_Bhatt.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
        >
          <span className="text-green-600">$</span> 
          {/* Shorten the command on mobile to prevent overflow */}
          <span className="md:hidden">./cv.sh</span>
          <span className="hidden md:inline">./download_cv.sh</span>
        </a>
      </div>

    </nav>
  );
}