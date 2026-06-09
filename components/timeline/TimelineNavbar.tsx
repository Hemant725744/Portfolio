import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export default function TimelineNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-black border-b border-white/10 text-white">
      
      <div className="w-20 h-17 rounded-md flex items-center justify-center overflow-hidden ">
            {/* Replace '/logo.png' with your actual file name */}
            <img 
              src="/logo.png" 
              alt="HB Logo" 
              className="w-full h-full object-cover bg-black " 
            />
        </div>

        {/* Status Indicator */}
            <div className="inline-flex ml-0 lg:ml-40 items-center gap-3 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-sm font-medium text-green-400 tracking-wide uppercase">Open to Work</span>
            </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6 md:gap-8">
        
        {/* 1. DOWNLOAD CV BUTTON */}
        <a 
          href="/Hemant_Bhatt.pdf" // Ensure this file exists in your 'public' folder
          download="Hemant_Bhatt.pdf"
          className="group flex items-center gap-2 text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
        >
          <Download size={16} className="group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline">Download CV</span>
          <span className="md:hidden">CV</span>
        </a>

        {/* 2. RETURN HOME */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return</span>
        </Link>

      </div>
    </nav>
  );
}