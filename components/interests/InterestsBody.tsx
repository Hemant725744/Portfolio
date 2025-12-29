"use client";

import { motion } from "framer-motion";
import { Play, Clock, Trophy, User, Hash, Quote } from "lucide-react";

// --- ENRICHED DATA (Chronological Order) ---
const games = [
  // --- PREVIOUSLY PLAYED ---
  {
    id: "LOG_01",
    title: "NFS: Most Wanted",
    series: "Limited Edition",
    desc: "The start of the journey. Outrunning the cops and climbing the Blacklist. Pure arcade adrenaline.",
    quote: "I am the most wanted.",
    stats: { status: "PLAYED", platform: "PC", focus: "Racing" },
    screenshots: ["/nfs1.jpg", "/nfs2.jpg", "/nfs3.jpg", "/nfs4.jpg"],
    video: null
  },
  {
    id: "LOG_02",
    title: "GTA: San Andreas",
    series: "Grand Theft Auto",
    desc: "Grove Street. A defining open-world experience involving gang warfare, jetpacks, and 90s nostalgia.",
    quote: "Ah sh*t, here we go again.",
    stats: { status: "PLAYED", platform: "PC", focus: "Open World" },
    screenshots: ["/gtasa1.jpg", "/gtasa2.jpg", "/gtasa3.jpg", "/gtasa4.jpg"],
    video: null
  },
  {
    id: "LOG_03",
    title: "Grand Theft Auto III",
    series: "Grand Theft Auto",
    desc: "The game that pioneered the 3D open-world genre. Liberty City felt dark, gritty, and alive.",
    quote: "I know a place...",
    stats: { status: "PLAYED", platform: "PC", focus: "Open World" },
    screenshots: ["/gta3_1.jpg", "/gta3_2.jpg", "/gta3_3.jpg", "/gta3_4.jpg"],
    video: null
  },
  {
    id: "LOG_04",
    title: "Grand Theft Auto V",
    series: "Grand Theft Auto",
    desc: "Three protagonists, one massive city. The heists were cinematic masterpieces.",
    quote: "Surviving is winning.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Heists" },
    screenshots: ["/gta5_1.jpg", "/gta5_2.jpg", "/gta5_3.jpg", "/gta5_4.jpg"],
    video: null
  },
  {
    id: "LOG_05",
    title: "Rise of the Tomb Raider",
    series: "Survivor Trilogy",
    desc: "Lara Croft evolving into a survivor. The snowy environments and tomb puzzles were breathtaking.",
    quote: "The extraordinary is in what we do.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Adventure" },
    screenshots: ["/tr1.jpg", "/tr2.jpg", "/tr3.jpg", "/tr4.jpg"],
    video: null
  },
  {
    id: "LOG_06",
    title: "Shadow of the Tomb Raider",
    series: "Survivor Trilogy",
    desc: "The conclusion of Lara's origin. Becoming one with the jungle and stopping the apocalypse.",
    quote: "I made a mistake.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Stealth" },
    screenshots: ["/str1.jpg", "/str2.jpg", "/str3.jpg", "/str4.jpg"],
    video: null
  },
  {
    id: "LOG_07",
    title: "The Last of Us Part I",
    series: "Naughty Dog",
    desc: "A heartbreaking journey across a post-apocalyptic America. Joel and Ellie's dynamic is unmatched.",
    quote: "Endure and survive.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Narrative" },
    screenshots: ["/tlou1.jpg", "/tlou2.jpg", "/tlou3.jpg", "/tlou4.jpg"],
    video: null
  },
  {
    id: "LOG_08",
    title: "The Last of Us Part II",
    series: "Naughty Dog",
    desc: "A brutal examination of the cycle of revenge. Emotionally draining but technically flawless.",
    quote: "I'm gonna find, and I'm gonna kill...",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Narrative" },
    screenshots: ["/tlou2_1.jpg", "/tlou2_2.jpg", "/tlou2_3.jpg", "/tlou2_4.jpg"],
    video: null
  },
  {
    id: "LOG_09",
    title: "COD: Modern Warfare II",
    series: "Modern Warfare",
    desc: "Task Force 141 returns. High stakes missions and refined gunplay mechanics.",
    quote: "Ghost here.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "FPS" },
    screenshots: ["/mw2_1.jpg", "/mw2_2.jpg", "/mw2_3.jpg", "/mw2_4.jpg"],
    video: null
  },
  {
    id: "LOG_10",
    title: "Spider-Man Remastered",
    series: "Marvel Insomniac",
    desc: "Perfect web-swinging mechanics. It truly makes you 'feel' like Spider-Man in NYC.",
    quote: "With great power...",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Action" },
    screenshots: ["/spidey1.jpg", "/spidey2.jpg", "/spidey3.jpg", "/spidey4.jpg"],
    video: null
  },
  {
    id: "LOG_11",
    title: "Spider-Man: Miles Morales",
    series: "Marvel Insomniac",
    desc: "New hero, new powers. The venom bio-electricity adds a fresh layer to combat.",
    quote: "Be yourself.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Action" },
    screenshots: ["/miles1.jpg", "/miles2.jpg", "/miles3.jpg", "/miles4.jpg"],
    video: null
  },
  {
    id: "LOG_12",
    title: "Marvel's Spider-Man 2",
    series: "Marvel Insomniac",
    desc: "Two Spider-Men. The Symbiote suit changes everything. A massive expansion of the city.",
    quote: "We are Venom.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Action" },
    screenshots: ["/sm2_1.jpg", "/sm2_2.jpg", "/sm2_3.jpg", "/sm2_4.jpg"],
    video: null
  },
  {
    id: "LOG_13",
    title: "Uncharted: Legacy of Thieves",
    series: "Naughty Dog",
    desc: "Globe-trotting treasure hunting. High-octane set pieces, ancient mysteries, and the perfect end to Nathan Drake's story.",
    quote: "Sic Parvis Magna.",
    stats: { status: "PLAYED", platform: "Laptop", focus: "Adventure" },
    screenshots: ["/uncharted1.jpg", "/uncharted2.jpg", "/uncharted3.jpg", "/uncharted4.jpg"],
    video: null
  },
  {
    id: "LOG_14",
    title: "Where Winds Meet",
    series: "Everstone",
    desc: "CURRENT MISSION. An open-world Wuxia RPG blending martial arts with history. Swords, freedom, and wind.",
    quote: "The wind guides my blade.",
    stats: { status: "ACTIVE AGENT", platform: "Laptop", focus: "RPG/Wuxia" },
    screenshots: ["/wwm1.jpg", "/wwm2.jpg", "/wwm3.jpg", "/wwm4.jpg"],
    video: "/wwm_gameplay.mp4"
  },
  {
    id: "LOG_15",
    title: "God of War (2018)",
    series: "Norse Saga",
    desc: "TARGET LIST. Kratos leaves Greece for the Norse wilds. A journey of fatherhood and war.",
    quote: "Boy.",
    stats: { status: "WILL PLAY", platform: "Laptop", focus: "Action RPG" },
    screenshots: ["", "", "", ""], 
    video: null
  },
  {
    id: "LOG_16",
    title: "God of War: Ragnarök",
    series: "Norse Saga",
    desc: "TARGET LIST. The Fimbulwinter is here. The conclusion to the Norse saga awaits.",
    quote: "Fate only binds you if you let it.",
    stats: { status: "WILL PLAY", platform: "Laptop", focus: "Action RPG" },
    screenshots: ["", "", "", ""],
    video: null
  },
  {
    id: "LOG_17",
    title: "Red Dead Redemption 2",
    series: "Rockstar Games",
    desc: "TARGET LIST. The end of the outlaw era. A massive, living open world detailing the Van der Linde gang.",
    quote: "I have a plan.",
    stats: { status: "WILL PLAY", platform: "Laptop", focus: "Open World" },
    screenshots: ["", "", "", ""],
    video: null
  },
  {
    id: "LOG_18",
    title: "Red Dead Redemption",
    series: "Rockstar Games",
    desc: "TARGET LIST. John Marston hunts down his former gang members. The classic western tale.",
    quote: "Redemption.",
    stats: { status: "WILL PLAY", platform: "Laptop", focus: "Open World" },
    screenshots: ["", "", "", ""],
    video: null
  }
];

export default function IntrestsBody() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2F3E2F] font-serif  overflow-x-hidden relative">
      
      {/* ================= HERO SECTION 1 ================= */}
      {/* FIX: Added mt-20 to push the image down below the navbar */}
      <div className="w-full relative mt-9 md:mt-16">
        <img 
          src="/interestbg_1.jpg" 
          alt="Interest Header 1" 
          className="w-full object-cover h-[40vh] md:h-[85vh]" 
        />
        {/* BLEND EFFECT: Bottom Fade to blend into the next image */}
        <div className="absolute bottom-0 left-0 w-full h-20 md:h-10 bg-gradient-to-t from-[#faf4da] to-transparent" />
      </div>


      {/* ================= HERO SECTION 2 ================= */}
      <div className="w-full relative -mt-10 md:-mt-0 z-10">
        {/* BLEND EFFECT: Top Fade to blend from the previous image */}
        <div className="absolute top-0 left-0 w-full h-5 md:h-10 bg-gradient-to-b from-[#faf4da] to-transparent z-20" />
        
        <img 
          src="/interestbg_2.jpg" 
          alt="Interest Header 2" 
          className="w-full object-cover h-[30vh] md:h-[110vh] relative z-10" 
        />
        
        {/* Bottom Fade for 2nd image to blend into content */}
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FDFBF7] to-transparent z-20" /> */}
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-12 pb-20 relative z-20">
        
        {/* ================= NEW HEADING ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="w-16 h-1 bg-[#556B2F]/20 mx-auto mb-6" /> {/* Small decorative line */}
          <h2 className="text-3xl md:text-4xl font-serif italic text-[#2F3E2F] leading-snug">
            A curated log of the virtual worlds I inhabit.
          </h2>
          <p className="mt-4 text-sm md:text-base font-sans tracking-widest uppercase text-[#556B2F] font-bold">
Even systems need downtime. Here lies the collection of virtual worlds 
          </p>
        </motion.div>


        {/* ================= GRID JOURNAL ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-24">
          {games.map((game, index) => (
            <motion.div 
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              
              // --- CARD STYLE UPDATE ---
              // Changed bg-white to bg-[#EAE5D9]/40 for a warmer, paper-like feel
              className={`flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl border transition-all backdrop-blur-sm
                 ${game.stats.status === "ACTIVE AGENT" 
                   ? "bg-[#556B2F]/10 border-[#556B2F]" 
                   : "bg-[#EAE5D9]/40 border-[#556B2F]/10 hover:border-[#556B2F]/30 hover:bg-[#EAE5D9]/80"} 
              `}
            >
              
              {/* --- LEFT: TEXT JOURNAL --- */}
              <div className="flex-1 space-y-4 relative w-full md:w-1/2">
                 
                 <div className="absolute top-0 bottom-0 -left-4 w-1 bg-[#556B2F]/20 hidden md:block" />

                 <div className="flex flex-col">
                    {/* <span className="text-4xl font-black text-[#556B2F]/10 absolute -top-8 -left-0 -z-10 select-none">
                      {game.id}
                    </span> */}
                    <h2 className="text-2xl font-bold uppercase  text-[#365304] tracking-tight leading-none mt-2">
                      {game.title}
                    </h2>
                    <span className="font-sans font-bold text-[#7eb029] tracking-wider text-[10px] mt-1">
                      // {game.series}
                    </span>
                 </div>
                 
                 <p className="text-sm leading-relaxed text-[#2F3E2F]/80 font-medium line-clamp-3">
                    {game.desc}
                 </p>

                 {/* Stats Grid */}
                 <div className="grid grid-cols-1 gap-2 py-3 border-t border-b border-[#556B2F]/10">
                    <div className="flex items-center gap-2">
                       <Hash size={14} className="text-[#556B2F]" />
                       <span className={`text-[10px] font-sans font-bold uppercase tracking-wider
                        ${game.stats.status === "PLAYED" ? "text-blue-600 animate-pulse" : ""}
                         ${game.stats.status === "ACTIVE AGENT" ? "text-green-700 animate-pulse" : ""}
                         ${game.stats.status === "WILL PLAY" ? "text-orange-700" : ""}
                       `}>{game.stats.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Trophy size={14} className="text-[#556B2F]" />
                       <span className="text-[10px] font-sans font-bold uppercase tracking-wider">{game.stats.focus}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <User size={14} className="text-[#556B2F]" />
                       <span className="text-[10px] font-sans font-bold uppercase tracking-wider">{game.stats.platform}</span>
                    </div>
                 </div>

                 <div className="">
                    <p className="font-handwriting text-lg text-[#556B2F] rotate-1">"{game.quote}"</p>
                 </div>
              </div>


              {/* --- RIGHT: 4 POLAROID VISUALS + VIDEO --- */}
              <div className="flex-1 w-full md:w-1/2 relative mt-4 md:mt-0">
                 
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#C2B280]/30 rotate-2 z-20 backdrop-blur-sm shadow-sm" />

                 <div className="p-2 bg-white shadow-xl rotate-1 border border-[#2F3E2F]/5">
                     
                     <div className="grid grid-cols-2 gap-2 mb-2">
                        {game.screenshots.map((shot, i) => (
                           <div key={i} className="h-24 bg-gray-100 overflow-hidden relative group">
                              <div className="absolute inset-0 bg-[#556B2F]/10 group-hover:bg-transparent transition-colors z-10" />
                              
                              <div className="w-full h-full flex flex-col items-center justify-center bg-[#2F3E2F]/5">
                                {shot ? (
                                  <img 
                                    src={shot} 
                                    alt={`${game.title} Screenshot ${i + 1}`} 
                                    className="w-full h-full object-cover  " 
                                  />
                                ) : (
                                  <div className="flex flex-col items-center justify-center h-full w-full border border-dashed border-[#2F3E2F]/10">
                                    <span className="text-[8px] text-[#2F3E2F]/20 font-sans font-bold">NO DATA</span>
                                  </div>
                                )}
                              </div>

                           </div>
                        ))}
                     </div>

                     {game.video && (
                       <div className="w-full h-8 bg-black flex items-center justify-between px-3 cursor-pointer hover:bg-[#556B2F] transition-colors group">
                          <span className="text-white font-sans text-[10px] tracking-widest font-bold">WATCH FOOTAGE</span>
                          <Play size={12} className="text-white group-hover:scale-125 transition-transform" />
                       </div>
                     )}
                 </div>

                 <div className="mt-2 text-center font-handwriting text-gray-400 text-sm -rotate-2">
                    Evidence Log: {game.id}
                 </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}