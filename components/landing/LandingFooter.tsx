"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Terminal, MessageCircle } from "lucide-react";

export default function Footer() {
  
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/hemantbhatt19", icon: <Linkedin size={20} /> },
    { name: "GitHub", href: "https://github.com/Hemant725744", icon: <Github size={20} /> },
    { name: "Email", href: "mailto:bhatthemant268@gmail.com", icon: <Mail size={20} /> },
    { name: "WhatsApp", href: "https://wa.me/918591140896", icon: <MessageCircle size={20} /> },
  ];

  return (
    <footer className="w-full bg-black border-t border-white/10 pt-20 pb-10 text-white relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          
          {/* 1. BRAND & STATUS */}
          <div className="space-y-6 max-w-md">
            <Link href="/" className="group flex items-center gap-3 w-fit">
              <div className="p-3 bg-white/5 rounded-xl text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                 <Terminal size={28} />
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-white">
                HB<span className="text-white/40">.DEV</span>
              </h2>
            </Link>
            
            <p className="text-gray-400 text-base leading-relaxed font-mono">
              Final Year Computer Engineering Student. <br />
              Full-Stack Developer. Problem Solver. <br />
              Building digital experiences from Mumbai.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
               </span>
               <span className="text-sm font-medium text-green-400 tracking-wide uppercase">Open to Work</span>
            </div>
          </div>

          {/* 2. SOCIAL CONNECT (Enlarged) */}
          <div className="space-y-6 min-w-[200px]">
             <h3 className="text-base font-bold text-white/50 uppercase tracking-[0.2em]">Connect</h3>
             <ul className="space-y-5"> 
                {socialLinks.map((link) => (
                   <li key={link.name}>
                     <a 
                       href={link.href} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white text-lg transition-colors flex items-center gap-4 group"
                     >
                        <span className="p-2 rounded-full bg-white/5 group-hover:text-cyan-400 group-hover:bg-white/10 transition-all">
                          {link.icon}
                        </span>
                        {link.name}
                     </a>
                   </li>
                ))}
             </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           
           <p className="text-sm text-gray-500 font-mono">
             © {new Date().getFullYear()} Hemant Bhatt. All Systems Nominal.
           </p>

           <div className="flex items-center gap-8">
              <span className="text-sm text-gray-600 font-mono">
                LOC: Mumbai, IN
              </span>
              <span className="text-sm text-gray-600 font-mono">
                v2.0.25
              </span>
           </div>

        </div>

      </div>
    </footer>
  );
}