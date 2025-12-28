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
      
      {/* Brand */}
      <div className={`${playfair.className} text-xl md:text-2xl tracking-widest italic font-bold`}>
        H. BHATT
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6 md:gap-8">
        
        {/* 1. DOWNLOAD CV BUTTON */}
        <a 
          href="/Hemant_Resume.pdf" // Ensure this file exists in your 'public' folder
          download="Hemant_Bhatt_CV.pdf"
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