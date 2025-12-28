"use client";

import { Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function TechFooter() {
  return (
    // FIX 1: Reduced padding from pt-12/pb-12 to pt-6/pb-8 to remove excess whitespace
    // <footer className="w-full bg-black flex flex-col items-center justify-center pt-3 pb-8">
      <footer className="w-full bg-black flex flex-col items-center justify-center pt-12 pb-12 border-t border-green-500/50">
      
      {/* ================= SECTION 1: COMPACT VIDEO CARD ================= */}
      {/* FIX 2: Reduced bottom margin from mb-8 to mb-4 to bring icons closer */}
      <div className="relative w-[90%] md:w-full max-w-xl h-20 md:h-64 overflow-hidden mb-4 mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/TECHFOOTER.mp4" type="video/mp4" />
        </video>
      </div>


      {/* ================= SECTION 2: SOCIAL LINKS ================= */}
      {/* FIX 3: Fixed typo "gap-" to "gap-8" for proper spacing */}
      <div className="flex items-center gap-8 md:gap-12 z-10">
        
        {/* 1. LINKEDIN */}
        <Link 
          href="https://www.linkedin.com/in/hemantbhatt19/" 
          target="_blank"
          className="group flex flex-col items-center gap-2"
        >
          <div className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-[#E2F800] group-hover:border-[#E2F800] group-hover:scale-110">
            <Linkedin 
              size={20} 
              className="text-white transition-colors duration-300 group-hover:text-black md:w-6 md:h-6" 
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-gray-500 group-hover:text-[#E2F800]">LINKEDIN</span>
        </Link>


        {/* 2. WHATSAPP */}
        <Link 
          href="https://wa.me/8591140896" 
          target="_blank"
          className="group flex flex-col items-center gap-2"
        >
          <div className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-[#E2F800] group-hover:border-[#E2F800] group-hover:scale-110">
            <MessageCircle 
              size={20} 
              className="text-white transition-colors duration-300 group-hover:text-black md:w-6 md:h-6" 
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-gray-500 group-hover:text-[#E2F800]">WHATSAPP</span>
        </Link>


        {/* 3. GMAIL */}
        <Link 
          href="mailto:bhatthemant268@gmail.com" 
          className="group flex flex-col items-center gap-2"
        >
          <div className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-[#E2F800] group-hover:border-[#E2F800] group-hover:scale-110">
            <Mail 
              size={20} 
              className="text-white transition-colors duration-300 group-hover:text-black md:w-6 md:h-6" 
            />
          </div>
          <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-gray-500 group-hover:text-[#E2F800]">EMAIL</span>
        </Link>

      </div>

      {/* Copyright Line */}
      <div className="mt-6 text-[10px] text-gray-600 font-mono text-center px-4">
        © 2024 HEMANT BHATT // SYSTEM SECURE
      </div>

    </footer>
  );
}