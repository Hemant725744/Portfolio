"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Award, Clock, Briefcase, Gamepad2, ArrowRight, Bot, Send, Sparkles, Loader2, X, UserCircle, Cpu, Wifi, Palette, Feather, Heart } from "lucide-react";

// --- SUGGESTIONS FOR THE USER ---
const SUGGESTIONS = ["Who is Hemant?", "What is his Tech Stack?", "Does he like Football?"];

// Define Portal Types
type PortalData = {
    name: string;
    href: string;
    icon: React.ReactNode;
    desc: string;
    color: string;      
    text: string;       
    loaderTheme: {      
        bg: string;
        accent: string;
        baseText: string;
        designName: string;
        designDesc: string;
        type: "tech" | "timeline" | "trophy" | "project" | "gaming" | "about"; 
    }
};

export default function LandingBody() {
  const router = useRouter(); 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringGrid, setIsHoveringGrid] = useState(false);

  // AI STATE
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  // TRANSITION STATE
  const [activePortal, setActivePortal] = useState<PortalData | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // --- NEW AI LOGIC (Connects to app/api/chat/route.ts) ---
  const handleAskAI = async (e?: React.FormEvent, overrideQuery?: string) => {
    if (e) e.preventDefault();
    const finalQuery = overrideQuery || query;
    if (!finalQuery.trim()) return;

    if (overrideQuery) setQuery(overrideQuery);
    
    setIsThinking(true);
    setShowResponse(true);
    setResponse(""); // Clear previous response
    
    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: finalQuery }),
        });

        if (!res.ok) throw new Error("API Error");

        const data = await res.json();
        const aiReply = data.reply;

        // Typewriter Effect
        setIsThinking(false);
        setIsTyping(true);
        
        let i = -1;
        const typeWriter = setInterval(() => {
          i++;
          setResponse((prev) => prev + aiReply.charAt(i));
          if (i >= aiReply.length - 1) {
            clearInterval(typeWriter);
            setIsTyping(false);
          }
        }, 15); // Typing speed

    } catch (error) {
        setIsThinking(false);
        setResponse("// SYSTEM ERROR: Connection to Neural Net failed.");
    }
  };

  const closeAI = () => {
    setShowResponse(false);
    setQuery("");
    setResponse("");
  };

  // --- PORTAL TRANSITION LOGIC ---
  const handlePortalClick = (e: React.MouseEvent, portal: PortalData) => {
    e.preventDefault(); 
    setActivePortal(portal); 

    setTimeout(() => {
        router.push(portal.href);
    }, 4000); 
  };

  // --- PORTAL CONFIGURATION ---
  const portals: PortalData[] = [
    { 
        name: "About", 
        href: "/about", 
        icon: <UserCircle size={20} />, 
        desc: "Explore me", 
        color: "hover:shadow-[0_0_30px_-5px_#ec4899] hover:border-pink-500/50", 
        text: "text-pink-500",
        loaderTheme: { 
            bg: "bg-[#FDFBF7]", 
            accent: "text-rose-500",
            baseText: "text-black",
            designName: "NEOPERSONA",
            designDesc: "A playful yet polished UI blending modern minimalism with Y2K expression.",
            type: "about" 
        }
    },
    { 
        name: "Tech Arsenal", 
        href: "/tech", 
        icon: <Terminal size={20} />, 
        desc: "Skills & Stack", 
        color: "hover:shadow-[0_0_30px_-5px_#22c55e] hover:border-green-500/50", 
        text: "text-green-500",
        loaderTheme: { 
            bg: "bg-black", 
            accent: "text-green-500",
            baseText: "text-white", 
            designName: "NEXUS",
            designDesc: "A modular, data-driven interface inspired by modern developer dashboards.",
            type: "tech" 
        }
    }, 
    { 
        name: "Project Lab", 
        href: "/projects", 
        icon: <Briefcase size={20} />, 
        desc: "Case Studies", 
        color: "hover:shadow-[0_0_30px_-5px_#3b82f6] hover:border-blue-500/50", 
        text: "text-blue-500",
        loaderTheme: { 
            bg: "bg-[#FDFBF7]", 
            accent: "text-red-600",
            baseText: "text-gray-800",
            designName: "CANVAS ROUGE",
            designDesc: "A soft, cream-toned canvas accented with artistic red expressions.",
            type: "project" 
        }
    },
    { 
        name: "Timeline", 
        href: "/timeline", 
        icon: <Clock size={20} />, 
        desc: "Experience", 
        color: "hover:shadow-[0_0_30px_-5px_#e5e7eb] hover:border-white/50", 
        text: "text-white",
        loaderTheme: { 
            bg: "bg-[#0a0a0a]", 
            accent: "text-white",
            baseText: "text-gray-300", 
            designName: "INKFOLD",
            designDesc: "A tactile, editorial UI that blends paper texture with modern dark mode.",
            type: "timeline" 
        }
    }, 
    { 
        name: "Trophy Room", 
        href: "/trophy", 
        icon: <Award size={20} />, 
        desc: "Achievements", 
        color: "hover:shadow-[0_0_30px_-5px_#eab308] hover:border-yellow-500/50", 
        text: "text-yellow-500",
        loaderTheme: { 
            bg: "bg-black", 
            accent: "text-yellow-500",
            baseText: "text-white", 
            designName: "AUREON",
            designDesc: "A gold-infused UI crafted to showcase excellence and achievement.",
            type: "trophy" 
        }
    }, 
    { 
        name: "Off-Duty", 
        href: "/interests", 
        icon: <Gamepad2 size={20} />, 
        desc: "Personal", 
        color: "hover:shadow-[0_0_30px_-5px_#f97316] hover:border-orange-500/50", 
        text: "text-orange-500",
        loaderTheme: { 
            bg: "bg-[#FDFBF7]", 
            accent: "text-[#556B2F]", 
            baseText: "text-[#2F3E2F]",
            designName: "VERDANT MUSE",
            designDesc: "A vintage watercolor UI inspired by nature and creative expression.",
            type: "gaming" 
        }
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start md:justify-center overflow-x-hidden pt-28 md:pt-18 pb-10">
      
      {/* =========================================================
          DYNAMIC PORTAL LOADERS
      ========================================================= */}
      <AnimatePresence>
        {activePortal && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`fixed inset-0 z-[100] flex flex-col items-center justify-center font-mono px-6 text-center ${activePortal.loaderTheme.bg}`}
            >
                {/* 1. TECH LOADER (NEXUS) */}
                {activePortal.loaderTheme.type === 'tech' && (
                    <div className="relative mb-8">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-24 h-24 border-t-2 border-green-500 rounded-full" />
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-2 left-2 w-20 h-20 border-b-2 border-cyan-500 rounded-full" />
                        <Cpu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500" size={32} />
                    </div>
                )}

                {/* 2. TIMELINE LOADER (INKFOLD) */}
                {activePortal.loaderTheme.type === 'timeline' && (
                    <div className="flex flex-col items-center mb-8">
                        <Clock className="text-white mb-4 animate-bounce" size={48} />
                        <div className="w-32 h-[2px] bg-gray-700 relative overflow-hidden">
                            <motion.div 
                                animate={{ x: ["-100%", "100%"] }} 
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
                                className="w-full h-full bg-white" 
                            />
                        </div>
                    </div>
                )}

                {/* 3. TROPHY LOADER (AUREON) */}
                {activePortal.loaderTheme.type === 'trophy' && (
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                        className="mb-8"
                    >
                        <Award className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" size={64} />
                    </motion.div>
                )}

                {/* 4. PROJECT LOADER (CANVAS ROUGE) */}
                {activePortal.loaderTheme.type === 'project' && (
                    <div className="mb-8 relative">
                        <Palette className="text-red-600" size={56} />
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "120%" }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute bottom-0 left-0 h-[2px] bg-red-600"
                        />
                    </div>
                )}

                {/* 5. OFF-DUTY LOADER (VERDANT MUSE) */}
                {activePortal.loaderTheme.type === 'gaming' && (
                    <div className="mb-8">
                        <Feather className="text-[#556B2F]" size={64} />
                        <motion.div 
                            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-full h-2 bg-[#556B2F]/20 rounded-full mt-4 blur-sm"
                        />
                    </div>
                )}

                {/* 6. ABOUT LOADER (NEOPERSONA) */}
                {activePortal.loaderTheme.type === 'about' && (
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1] }} 
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} 
                        className="mb-8"
                    >
                        <Heart className="text-rose-500 fill-rose-500" size={64} />
                    </motion.div>
                )}

                {/* DESIGN NAME & DESC */}
                <div className="space-y-2 max-w-md">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-3xl md:text-5xl font-black tracking-tighter uppercase ${activePortal.loaderTheme.accent}`}
                    >
                        {activePortal.loaderTheme.designName}
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className={`text-sm font-medium tracking-wide uppercase ${activePortal.loaderTheme.baseText} opacity-70`}
                    >
                        {activePortal.loaderTheme.designDesc}
                    </motion.p>
                </div>

                {/* FOOTER MESSAGE */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className={`mt-12 text-xs font-mono tracking-[0.2em] border-t pt-4 ${activePortal.loaderTheme.type === 'project' || activePortal.loaderTheme.type === 'gaming' || activePortal.loaderTheme.type === 'about' ? 'border-gray-300' : 'border-gray-800'} ${activePortal.loaderTheme.baseText}`}
                >
                    INITIALIZING EXPERIENCE...
                </motion.div>

            </motion.div>
        )}
      </AnimatePresence>


      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ease-in-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.55), transparent 80%)`,
          opacity: isHoveringGrid ? 0 : 1, 
        }}
      />

      {/* CONTENT */}
      <div className="relative z-40 w-full max-w-5xl px-6 flex flex-col items-center gap-8 md:gap-10">
       
        {/* HEADER */}
        <div className="text-center mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-8xl font-bold tracking-tighter text-white/90 mb-4"
          >
            HEMANT BHATT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-gray-400 font-mono text-xs md:text-sm tracking-widest"
          >
            // SYSTEM READY. SELECT A PORTAL TO EXPERIENCE ITS UNIQUE DESIGN SIGNATURE.
          </motion.p>
        </div>

        {/* === AI NEURAL SEARCH === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.5 }}
          className="w-full max-w-xl relative group z-50"
        >
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent">
             <form onSubmit={(e) => handleAskAI(e)} className="relative flex items-center bg-black/80 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)] focus-within:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] focus-within:border-cyan-500/50">
                <div className="pl-4 text-cyan-400 animate-pulse"><Bot size={20} /></div>
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask the AI..."
                  className="w-full bg-transparent border-none text-white px-4 py-3 focus:ring-0 focus:outline-none placeholder-gray-500 font-mono text-sm"
                />
                <button type="submit" disabled={!query.trim() || isThinking || isTyping} className="pr-4 text-gray-400 hover:text-cyan-400 disabled:opacity-50">
                  {isThinking ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </button>
             </form>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((suggestion, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                onClick={() => handleAskAI(undefined, suggestion)}
                disabled={isThinking || isTyping}
                className="px-3 py-1 text-[11px] md:text-xs font-mono rounded-full border border-white/10 text-gray-400 bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                {suggestion}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {showResponse && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 10 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="overflow-hidden"
              >
                <div className="bg-[#0A0A0A] border border-cyan-500/30 rounded-2xl p-5 shadow-2xl relative mt-4 min-h-[100px]">
                   <button onClick={closeAI} className="absolute top-3 right-3 text-gray-500 hover:text-white"><X size={16} /></button>
                   <div className="flex gap-3 items-start">
                      <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Sparkles size={18} /></div>
                      <div className="flex-1">
                        <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-wider mb-1">
                           {isThinking ? "PROCESSING DATA..." : "AI GENERATED RESPONSE"}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed font-mono whitespace-pre-line">
                          {isThinking ? <span className="animate-pulse">Synthesizing answer...</span> : <>{response}{isTyping && <span className="inline-block w-2 h-4 bg-cyan-500 ml-1 animate-blink"/>}</>}
                        </p>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* --- PORTALS GRID --- */}
        <div 
          className="relative w-full p-4 md:p-8 rounded-3xl overflow-hidden border border-white/5 mt-6"
          onMouseEnter={() => setIsHoveringGrid(true)} 
          onMouseLeave={() => setIsHoveringGrid(false)}
        >
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"> 
              <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-cyan-600 rounded-full blur-[180px]" />
              <motion.div animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-purple-700 rounded-full blur-[180px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {portals.map((item, index) => (
              <div 
                key={item.name} 
                onClick={(e) => handlePortalClick(e, item)}
                className="group relative block cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`h-full p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-black/40 ${item.color}`}
                >
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className={`p-3 rounded-lg bg-white/5 text-gray-300 group-hover:bg-white/10 transition-colors ${item.text}`}>{item.icon}</div>
                    <ArrowRight className="text-white/20 group-hover:text-white transition-colors" size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 relative z-10">{item.name}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors relative z-10">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
