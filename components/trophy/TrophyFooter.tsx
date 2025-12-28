"use client";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400"] });

export default function TrophyFooter() {
  return (
    <footer className="bg-[#020202] border-t border-[#D4AF37]/20 py-12 text-center">
      <div className={`${cinzel.className} text-[#D4AF37] text-2xl font-bold tracking-widest mb-4`}>
        H. BHATT
      </div>
      <p className="text-gray-600 text-xs tracking-[0.3em] uppercase">
        Excellence is not an act, but a habit.
      </p>
      <div className="mt-8 text-[10px] text-gray-800 font-mono">
        © 2024 SYSTEM SECURE // GALLERY
      </div>
    </footer>
  );
}