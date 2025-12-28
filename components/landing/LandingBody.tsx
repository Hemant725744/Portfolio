"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Award, Clock, Briefcase, Gamepad2, ArrowRight, Bot, Send, Sparkles, Loader2, X } from "lucide-react";

// =========================================================================
// 1. THE KNOWLEDGE BASE (Refined Tags for Accuracy)
// =========================================================================
const KNOWLEDGE_BASE = [
  {
    tags: ["identity", "who", "name", "student", "college", "university", "intro", "bio"],
    content: "Hemant Bhatt is a Final Year Computer Engineering Student at Pillai HOC College (Mumbai University) and a passionate Full-Stack Developer.",
    portal: "Timeline"
  },
  {
    tags: ["marks", "score", "grade", "cgpa", "sgpi", "10th", "12th", "academic", "sem", "semester", "education", "result"],
    content: "Academically, Hemant holds a cumulative SGPI of 7.9/10. His semester-wise progression is strong: Sem 1 (8.5), Sem 2 (8.7), Sem 3 (9.0), Sem 4 (8.2), Sem 5 (9.1), and Sem 6 (9.3). He secured 85% in Class 12th and 89% in Class 10th.",
    portal: "Timeline"
  },
  {
    tags: ["intern", "job", "work", "experience", "career", "sems", "acmegrade", "tg", "ganishka", "aptech", "systenics", "capgemini", "internship"],
    content: "His professional experience is extensive. He is currently an IT Intern at SEMS Welfare Foundation. Previously, he interned at AcmeGrade, TG Connect, and Ganishka Enterprises. He also served as a Project Head at Aptech.",
    portal: "Timeline"
  },
  {
    tags: ["project", "build", "create", "hack", "ransomware", "hackoverflow", "website", "freelance", "ngo", "csi", "eduease", "algo", "development"],
    content: "His project portfolio is diverse. Key projects include 'Ransomware Attack Detection' (Deep Learning), the 'Hackoverflow 4.0' Official Website, and the 'EduEase' Attendance System.",
    portal: "Project Lab"
  },
  {
    tags: ["future", "plan", "germany", "master", "abroad", "ielts", "goal", "study", "ms"],
    content: "Looking ahead, Hemant is targeting the Winter 2026 intake for a Master's in Computer Science in Germany. He is actively preparing for his IELTS exam in December 2025.",
    portal: "Timeline"
  },
  {
    tags: ["skill", "tech", "stack", "code", "language", "react", "next", "java", "python", "backend", "frontend", "selenium", "php", "sql", "technology", "technologies"],
    content: "Technically, his arsenal is built on the MERN Stack. He is proficient in React.js, Next.js, and TypeScript for frontend, with PHP, MySQL, and Python powering backend logic.",
    portal: "Tech Arsenal"
  },
  {
    tags: ["research", "paper", "publish", "achievement", "hackathon", "won", "certificate", "certification", "certifications", "sih", "nasscom", "award", "microsoft"],
    content: "He is a published researcher ('EduEase' in Journal of Data Engineering) and a winner of AlgoHackathon. He holds key certifications from NASSCOM (Skill India), Microsoft (Career Essentials), and Aptech (Java).",
    portal: "Trophy Room" 
  },
  {
    tags: ["interest", "hobby", "like", "love", "personal", "football", "messi", "wwe", "sheamus", "game", "fifa", "batman", "dislike"],
    content: "Off-duty, Hemant is a massive football fan (Team Messi & Argentina 🇦🇷), a WWE enthusiast (Sheamus 🇮🇪), and a competitive gamer (FIFA & Batman Arkham).",
    portal: "Off-Duty"
  },
  {
    tags: ["german", "english", "hindi", "foreign", "goethe", "language"],
    content: "Linguistically, he is expanding his skills by learning German (A2 Level ongoing at Goethe-Institut) to support his Master's plans.",
    portal: "Trophy Room"
  }
];

const AI_INTRO_PHRASES = [
  "Based on Hemant's profile, ",
  "Accessing the bio-data archives: ",
  "Here is the relevant data regarding your query: ",
  "According to his records, ",
];

const SUGGESTIONS = ["Experience?", "Certifications?", "Future Plans?", "Projects?", "Skills?"];

// 2. STOP WORDS LIST (Words to ignore to prevent logic collisions)
const STOP_WORDS = ["what", "are", "is", "does", "he", "have", "has", "the", "a", "an", "tell", "me", "about", "his", "him", "hemant", "bhatt"];

export default function LandingBody() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringGrid, setIsHoveringGrid] = useState(false);

  // AI STATE
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // --- ROBUST NEURAL ENGINE ---
  const generateAIResponse = (userQuery: string) => {
    const lowerQuery = userQuery.toLowerCase();
    
    // 1. Tokenize & Clean
    let tokens = lowerQuery.split(" ").map(t => t.trim()).filter(t => t !== "");
    
    // 2. Filter out Stop Words (Ignore "Hemant", "What", "is" etc. to find the REAL topic)
    const filteredTokens = tokens.filter(token => !STOP_WORDS.includes(token));

    // 3. Fallback: If the user *only* typed "Hemant" (filteredTokens is empty), use the original tokens.
    const activeTokens = filteredTokens.length > 0 ? filteredTokens : tokens;

    // 4. Score Knowledge Chunks
    const scoredFacts = KNOWLEDGE_BASE.map(fact => {
      let score = 0;
      activeTokens.forEach(token => {
        // Partial match allows "skills" to match "skill" tag
        if (fact.tags.some(tag => tag.includes(token) || token.includes(tag))) {
          score += 1;
        }
      });
      return { ...fact, score };
    });

    // 5. Filter & Sort by Relevance
    const relevantFacts = scoredFacts.filter(f => f.score > 0).sort((a, b) => b.score - a.score);

    if (relevantFacts.length > 0) {
      const intro = AI_INTRO_PHRASES[Math.floor(Math.random() * AI_INTRO_PHRASES.length)];
      // Get core answer (Top 2 facts)
      const coreAnswer = relevantFacts.slice(0, 2).map(f => f.content).join(" ");
      
      // Get the portal from the WINNING fact
      const targetPortal = relevantFacts[0].portal || "Timeline"; 
      
      // Safety: Add icon to Suggestion
      const suggestion = `\n\n👉 Suggestion: Explore the '${targetPortal}' portal for details.`;

      return `${intro} ${coreAnswer} ${suggestion}`;
    } else {
      return "My neural sensors didn't catch a specific match. I can elaborately discuss Hemant's Grades (SGPI), Internships, Research Papers, or his Future Plans for Germany. Please specify a topic.";
    }
  };

  // --- TRIGGER AI ---
  const handleAskAI = async (e?: React.FormEvent, overrideQuery?: string) => {
    if (e) e.preventDefault();
    
    const finalQuery = overrideQuery || query;
    if (!finalQuery.trim()) return;

    if (overrideQuery) setQuery(overrideQuery);

    setIsThinking(true);
    setShowResponse(true);
    setResponse(""); 
    
    // Simulate Thinking
    await new Promise(resolve => setTimeout(resolve, 800)); // Slightly faster response
    
    const answer = generateAIResponse(finalQuery);

    setIsThinking(false);
    setIsTyping(true);
    
    // --- TYPEWRITER LOGIC (Using substring for 100% accuracy) ---
    let i = 0;
    const typeWriter = setInterval(() => {
      i++;
      // This ensures we never "miss" a letter by slicing the full string
      setResponse(answer.substring(0, i)); 
      
      if (i >= answer.length) {
        clearInterval(typeWriter);
        setIsTyping(false);
      }
    }, 15); 
  };

  const closeAI = () => {
    setShowResponse(false);
    setQuery("");
    setResponse("");
  };

  const portals = [
    { name: "Tech Arsenal", href: "/tech", icon: <Terminal size={20} />, desc: "Skills & Stack", color: "hover:shadow-[0_0_30px_-5px_#22c55e] hover:border-green-500/50" }, 
    { name: "Timeline", href: "/timeline", icon: <Clock size={20} />, desc: "Experience", color: "hover:shadow-[0_0_30px_-5px_#e5e7eb] hover:border-white/50" }, 
    { name: "Trophy Room", href: "/trophy", icon: <Award size={20} />, desc: "Achievements", color: "hover:shadow-[0_0_30px_-5px_#eab308] hover:border-yellow-500/50" }, 
    { name: "Project Lab", href: "/projects", icon: <Briefcase size={20} />, desc: "Case Studies", color: "hover:shadow-[0_0_30px_-5px_#3b82f6] hover:border-blue-500/50" }, 
    { name: "Off-Duty", href: "/interests", icon: <Gamepad2 size={20} />, desc: "Personal", color: "hover:shadow-[0_0_30px_-5px_#f97316] hover:border-orange-500/50" }, 
  ];

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start md:justify-center overflow-x-hidden pt-28 md:pt-18 pb-10">
      
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
        <div className="text-center">
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
            // SYSTEM READY. SELECT PORTAL.
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

          {/* SUGGESTION CHIPS */}
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

          {/* RESPONSE PANEL */}
          <AnimatePresence>
            {showResponse && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 10 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="overflow-hidden"
              >
                {/* Min-height added to prevent layout shift during typing */}
                <div className="bg-[#0A0A0A] border border-cyan-500/30 rounded-2xl p-5 shadow-2xl relative mt-4 min-h-[100px]">
                   <button onClick={closeAI} className="absolute top-3 right-3 text-gray-500 hover:text-white"><X size={16} /></button>
                   <div className="flex gap-3 items-start">
                      <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg text-cyan-400"><Sparkles size={18} /></div>
                      <div className="flex-1">
                        <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-wider mb-1">
                           {isThinking ? "PROCESSING DATA..." : "AI GENERATED RESPONSE"}
                        </div>
                        {/* whitespace-pre-line handles the suggestion newline properly */}
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
              <Link key={item.name} href={item.href} className={`group relative block ${index >= 3 ? "lg:col-span-1 lg:last:col-start-2 lg:last:col-end-3" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`h-full p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-black/40 ${item.color}`}
                >
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="p-3 rounded-lg bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">{item.icon}</div>
                    <ArrowRight className="text-white/20 group-hover:text-white transition-colors" size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 relative z-10">{item.name}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors relative z-10">{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}