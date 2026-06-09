"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, Quote, Star, Paperclip, User, MapPin, Calendar } from "lucide-react";

// --- DATA: CAROUSEL (LOCKED) ---
const carouselItems = [
  {
    id: 1,
    title: "All About Me",
    src: "/image1.png",  
    caption: "Hello! Know more about me."
  },
  {
    id: 2,
    title: "Fact",
    src: "/image2.png",  
    caption: "Must know fact."
  },
  {
    id: 3,
    title: "The Intersection",
    src: "/image3.png", 
    caption: "Technology meets Creativity."
  },
  {
    id: 4,
    title: "My Story",
    src: "/image4.png", 
    caption: "A journey rooted in Mumbai."
  },
  {
    id: 5,
    title: "A Day With Me",
    src: "/image5.png", 
    caption: "College. Work. Sleep. Repeat."
  },
  {
    id: 6,
    title: "My Favorite Food",
    src: "/image6.png", 
    caption: "Fueling the engine."
  },
  {
    id: 7,
    title: "Photography",
    src: "/image7.png", 
    caption: "Capturing moments offline."
  }
];

// --- DATA: EDUCATION ---
const educationData = [
  {
    year: "2022 - Present",
    degree: "B.E. Computer Engineering",
    school: "Pillai HOC College of Engineering",
    score: "SGPA: 7.9/10",
    desc: "Specializing in Computer Engineering."
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary (12th)",
    school: "K.L.E Junior College",
    score: "Score: 77.8%",
    desc: "Major in Science (PCM)."
  },
  {
    year: "2020",
    degree: "Secondary School (10th)",
    school: "Convet of Jesus and Mary High School",
    score: "Score: 78.7%",
    desc: "School Topper in Mathematics."
  }
];

// --- DATA: TESTIMONIALS ---
const testimonials = [
  {
    name: "Dr. Kiran Derle, PhD.",
    role: "Educator",
    text: "I had the opportunity to teach Hemant Bhatt during a 7-day seminar at Pillai HOC College of Engineering & Technology, and I was highly impressed by his sincerity, discipline, and eagerness to learn. He consistently stood out through his focused participation, insightful questions, and strong technical understanding. Hemant’s proactive mindset, analytical ability, and mature approach to learning reflect his professionalism and commitment to self-improvement. I fully recommend him for future academic or professional opportunities and am confident that he is exceptionally well-suited for his abroad study plans.",
    color: "bg-[#FEF08A]" // Yellow Sticky
  },
  {
    name: "Kosal Kanakia.",
    role: "Indirect Procurement",
    text: "I had the pleasure of working with Hemant on my portfolio website, and the experience was excellent from start to finish. He communicated clearly, listened carefully to my requirements, and handled every discussion with professionalism and patience. What stood out most was his polite approach and ability to understand client expectations without repeated explanations. The website he delivered was clean, well-structured, and visually impressive, exceeding my expectations. I truly appreciate his dedication, technical skills, and respectful way of working, and I would highly recommend him to anyone looking for a reliable and skilled developer.",
    color: "bg-[#E9D5FF]" // Purple/Blue Sticky
  }
];

// --- DATA: FAQ ---
const faqs = [
  {
    q: "What motivated you to pursue a career in engineering?",
    a: "I chose engineering because it combines analytical thinking, creativity, and innovation to solve real-world problems. The opportunity to design impactful solutions and continuously adapt to evolving technologies is what drives my passion for the field."
  },
  {
    q: "Are you available for freelance and contract opportunities?",
    a: "Yes. I collaborate with individuals, startups, and organizations on freelance and contract-based projects, delivering scalable, efficient, and high-quality solutions tailored to their specific requirements."
  },
  {
    q: "How is pricing determined for freelance projects?",
    a: "Project pricing is based on several factors, including scope, complexity, timeline, technical requirements, and expected deliverables. After assessing the project requirements, I provide a transparent and customized quotation."
  },
  {
    q: "Do you offer discounted rates for specific projects or organizations?",
    a: "Yes. Special pricing may be considered for students, non-profit organizations, early-stage startups, and long-term collaborations. Each request is evaluated individually to ensure a fair and mutually beneficial arrangement."
  }
];

export default function AboutBody() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans overflow-x-hidden pt-20 md:pt-24 pb-20">
      
      {/* ================= 1. HEADER IMAGE (LOCKED) ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full relative"
      >
        <img 
          src="/aboutheading.jpg" 
          alt="Hemant Bhatt Profile Header" 
          className="w-full h-auto object-contain block"
        />
      </motion.div>


      {/* ================= 2. THE SCRAPBOOK CAROUSEL (LOCKED) ================= */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
           <h2 className="text-3xl font-black text-black uppercase tracking-tighter">
             The Scrapbook <span className="text-rose-500 text-lg font-serif italic normal-case">- Drag to explore</span>
           </h2>
        </div>

        <motion.div 
          ref={carouselRef} 
          className="cursor-grab active:cursor-grabbing overflow-hidden pl-6"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -1500 }} 
            className="flex gap-8 w-max"
          >
            {carouselItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className="relative w-[300px] md:w-[400px] flex-shrink-0 group"
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-4 pb-12 shadow-xl border border-black/5 rotate-1">
                   <div className="aspect-[5/3] bg-gray-100 overflow-hidden mb-4 border border-black/5">
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                   </div>
                   <h3 className="font-serif italic text-2xl text-black">{item.title}</h3>
                   <p className="font-sans text-xs text-rose-500 mt-1 uppercase tracking-widest font-bold">{item.caption}</p>
                </div>
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 -rotate-2 backdrop-blur-sm opacity-80
                    ${index % 3 === 0 ? "bg-rose-400/30" : index % 3 === 1 ? "bg-purple-400/30" : "bg-yellow-400/30"}
                `} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>


      {/* ================= 3. ACADEMIC LOG (NEW SPLIT DESIGN) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* --- LEFT SECTION: INTRO CARD (35% Width) --- */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-4 sticky top-32"
            >
                {/* Styled like a Pinned Note / Profile Card */}
                <div className="bg-white p-8 rounded-sm shadow-[8px_8px_0px_rgba(0,0,0,0.1)] border border-gray-200 relative rotate-[-1deg]">
                    
                    {/* Visual Pin */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 shadow-md border-2 border-white" />

                    <h3 className="text-2xl font-black uppercase text-black mb-4 tracking-tight">
                        Profile <span className="text-rose-500">Summary</span>
                    </h3>
                    
                    <p className="font-serif italic text-gray-600 leading-relaxed mb-6">
                        "I am an engineer by degree, a developer by passion, and a creative at heart. My journey is fueled by caffeine, curiosity, and the constant urge to build things that matter."
                    </p>

                    <div className="space-y-3 font-mono text-xs border-t border-dashed border-gray-200 pt-4">
                        <div className="flex items-center gap-3 text-gray-500">
                            <User size={16} className="text-purple-500" />
                            <span>Hemant Bhatt</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500">
                            <MapPin size={16} className="text-rose-500" />
                            <span>Navi Mumbai, IN</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500">
                            <Calendar size={16} className="text-yellow-500" />
                            <span>Class of 2026</span>
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* --- RIGHT SECTION: ACADEMIC TIMELINE (65% Width) --- */}
            <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-purple-600 text-white rounded-lg shadow-lg shadow-purple-200">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-wide text-black">Academic Log</h2>
                </div>

                <div className="relative border-l-4 border-dashed border-gray-200 ml-4 space-y-12">
                    {educationData.map((edu, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Pin/Dot on Timeline */}
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-rose-500 border-4 border-[#FDFBF7]" />
                            
                            {/* Card Styled like an Index Card */}
                            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.05)] hover:shadow-[6px_6px_0px_rgba(225,29,72,0.2)] transition-all">
                                
                                <div className="flex justify-between items-start mb-2">
                                    <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold font-mono rounded-full mb-1">
                                        {edu.year}
                                    </span>
                                    <Paperclip size={18} className="text-gray-300" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-1 mb-3">
                                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{edu.school}</span>
                                    <span className="text-sm font-black text-rose-500">{edu.score}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed border-t border-dashed border-gray-200 pt-3">
                                    {edu.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </section>


      {/* ================= 4. TESTIMONIALS ================= */}
      <section className="bg-[#FDFBF7] py-20 relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="font-mono text-rose-500 text-xs tracking-[0.3em] uppercase">References</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-2 text-black">
                    Witness Statements
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        initial={{ rotate: i % 2 === 0 ? 2 : -2 }}
                        className={`p-6 shadow-lg transition-all duration-300 ${t.color}`} 
                    >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm -rotate-2" />
                        <Quote size={24} className="text-black/20 mb-4" />   
                        <p className="font-handwriting text-lg leading-snug mb-6 text-gray-800 text-justify">
                            "{t.text}"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center font-bold text-xs text-black/60">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase text-black/80">{t.name}</h4>
                                <span className="text-[10px] font-bold tracking-wider text-black/50 uppercase">{t.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>


      {/* ================= 5. FAQ ================= */}
      <section className="max-w-3xl mx-auto px-6 py-20 ">
         <div className="text-center mb-12">
            <span className="font-mono text-purple-600 text-xs tracking-[0.3em] uppercase">Interrogation Log</span>
            <h2 className="text-3xl font-black mt-2 text-black">Frequently Asked Questions</h2>
         </div>

         <div className="space-y-6">
            {faqs.map((item, i) => (
                <div key={i} className="group border-b-2 border-gray-100 pb-4 hover:border-rose-200 transition-colors">
                    <button 
                        onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                        className="w-full flex items-center justify-between py-2 text-left"
                    >
                        <span className="font-bold text-lg text-gray-900 group-hover:text-rose-500 transition-colors">
                            {item.q}
                        </span>
                        <ChevronDown 
                            size={20} 
                            className={`text-gray-400 transition-transform duration-300 ${activeAccordion === i ? "rotate-180 text-rose-500" : ""}`} 
                        />
                    </button>
                    <AnimatePresence>
                        {activeAccordion === i && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-2  pl-4 border-l-4 border-purple-200 ml-1">
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {item.a}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
         </div>
      </section>

    </div>
  );
}