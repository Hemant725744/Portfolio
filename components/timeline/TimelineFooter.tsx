"use client";

import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export default function TimelineFooter() {
  return (
    <footer className="w-full bg-[#000000] border-t border-white/10 py-16 px-6 flex flex-col items-center justify-center text-center">
      
      {/* Signature */}
      <h2 className={`${playfair.className} text-3xl md:text-4xl text-white font-bold italic mb-6`}>
        Hemant Bhatt
      </h2>

      {/* Links */}
      <div className="flex gap-8 mb-8 text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase font-mono">
        <Link href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</Link>
        <Link href="https://wa.me/8591140896"  className="hover:text-white transition-colors">Whatsapp</Link>
        <Link href="mailto:bhatthemant268@gmail.com" className="hover:text-white transition-colors">EMail</Link>
        
      </div>

      {/* Copyright */}
      <div className="text-[10px] text-gray-700 tracking-widest">
        © 2024. ALL RIGHTS RESERVED.
      </div>

    </footer>
  );
}