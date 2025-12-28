"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";

export default function TechNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#0D1117]/90 backdrop-blur-md border-b border-green-500/20">
      
      {/* 1. Brand: Responsive Text Switching */}
      <div className="flex items-center gap-2 text-green-500 font-mono">
        <Terminal size={16} className="md:w-[18px] md:h-[18px]" />
        
        <span className="font-bold tracking-tight text-xs md:text-sm lg:text-base">
          {/* Visible ONLY on Mobile */}
          <span className="md:hidden">root:~/tech</span>
          
          {/* Visible ONLY on Desktop */}
          <span className="hidden md:inline">root@hemant-system:~/tech-arsenal</span>
        </span>
      </div>

      {/* 2. Navigation: Tighter gaps and smaller text on mobile */}
      <div className="flex gap-3 md:gap-6 font-mono text-[10px] md:text-sm">
        <Link 
          href="/" 
          className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
        >
          <span className="text-green-600">$</span> cd /root
        </Link>
        
        <a 
          href="/Hemant_Resume.pdf" 
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