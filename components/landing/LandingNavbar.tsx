"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, User, Code, Cpu, Trophy, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 1. Detect Scroll for Glass Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Navigation Links Configuration
  const navLinks = [
    { name: "Home", href: "/", icon: <Terminal size={24} /> },
    { name: "Tech", href: "/tech", icon: <Code size={24} /> },
    { name: "Timeline", href: "/timeline", icon: <User size={24} /> },
    { name: "Projects", href: "/projects", icon: <Cpu size={24} /> },
    { name: "Trophy", href: "/trophy", icon: <Trophy size={24} /> },
    { name: "Off-Duty", href: "/interests", icon: <Sparkles size={24} /> },
  ];

  return (
    <>
      {/* ================= MAIN NAVBAR (CLEAN VERSION) ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* A. LOGO ONLY (Left Side) */}
          <Link href="/" className="group relative z-[110]">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
              <span className="group-hover:text-cyan-400 transition-colors duration-300">HB</span>
              <span className="text-white/50 group-hover:text-white transition-colors duration-300">.DEV</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* B. MENU TOGGLE (Right Side - Visible on ALL Screens now) */}
          {/* Removed the 'md:hidden' class so it appears on Desktop too */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors z-[110] group"
          >
            <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}>
               {isOpen ? <X size={28} className="text-cyan-400" /> : <Menu size={28} className="group-hover:text-cyan-400" />}
            </div>
          </button>

        </div>
      </motion.nav>

      {/* ================= FULL SCREEN MENU OVERLAY ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black -z-10" />

            {/* Navigation List */}
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      group flex items-center justify-center gap-4 text-3xl md:text-5xl font-black tracking-tight
                      ${pathname === link.href ? "text-cyan-400" : "text-gray-500 hover:text-white"}
                      transition-all duration-300 hover:scale-105
                    `}
                  >
                    {/* Icon (Shows on hover) */}
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-cyan-400 scale-75">
                      {link.icon}
                    </span>
                    {/* Text */}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a href="mailto:hemantbhatt@example.com" className="px-8 py-3 rounded-full border border-white/20 text-white font-mono text-sm hover:bg-cyan-500/20 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                INITIALIZE_CONTACT
              </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}