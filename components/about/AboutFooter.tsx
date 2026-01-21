"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function AboutFooter() {
  return (
    <footer className="w-full bg-[#FDFBF7] pt-24 pb-12 border-t border-black/5 relative z-30 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* === MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
            
            {/* --- LEFT COLUMN: BIO & BADGE --- */}
            <div className="space-y-8">
                {/* Logo Area */}
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden shadow-xl ring-4 ring-white">
                    <img src="/logo.png" alt="HB Logo" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-2 max-w-md">
                    <p className="text-gray-700 font-medium leading-relaxed text-lg">
                        Final Year Computer Engineering Student. <br />
                        <span className="text-black font-bold">Full-Stack Developer.</span> Problem Solver. <br />
                        Open to exciting opportunities and collaborations!
                    </p>
                </div>

                {/* "OPEN TO WORK" Badge - Themed to match About Section */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold tracking-widest uppercase shadow-sm cursor-default"
                >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                    </span>
                    OPEN TO WORK
                </motion.div>
            </div>

            {/* --- RIGHT COLUMN: CONNECT LINKS --- */}
            <div className="md:flex md:justify-end">
                <div className="space-y-8">
                    <h3 className="text-xs font-bold tracking-[0.3em] text-rose-500 uppercase border-b border-rose-100 pb-2">
                        Connect
                    </h3>
                    
                    <div className="flex flex-col gap-5">
                        <a href="https://linkedin.com/in/hemantbhatt19" className="flex items-center gap-4 text-gray-500 hover:text-black transition-all group">
                            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </div>
                            <span className="font-bold text-sm">LinkedIn</span>
                        </a>
                        
                        <a href="https://github.com/Hemant725744" className="flex items-center gap-4 text-gray-500 hover:text-black transition-all group">
                            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors">
                                <Github size={18} />
                            </div>
                            <span className="font-bold text-sm">GitHub</span>
                        </a>

                        <a href="mailto:hemantbhatt268@gmail.com" className="flex items-center gap-4 text-gray-500 hover:text-black transition-all group">
                            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                <Mail size={18} />
                            </div>
                            <span className="font-bold text-sm">Email</span>
                        </a>

                        <a href="https://wa.me/8591140896" className="flex items-center gap-4 text-gray-500 hover:text-black transition-all group">
                            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <MessageCircle size={18} />
                            </div>
                            <span className="font-bold text-sm">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-wider">
            <p>© 2026 Hemant Bhatt. All Systems Nominal.</p>
            <p className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">LOC:</span> Mumbai, IN
            </p>
        </div>

      </div>
    </footer>
  );
}