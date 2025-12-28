"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

export default function intrestBody(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
          Coming Soon
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-8">
          This section is currently under development.  
          I’m working on something meaningful — stay tuned.
        </p>

        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="inline-block text-sm tracking-widest text-gray-500 uppercase"
        >
          🚀 Launching Soon
        </motion.span>
      </motion.div>
    </main>
  );
}
