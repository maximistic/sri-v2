"use client";

import React from "react";
import { motion } from "framer-motion";
import CursorGlow from "@/components/ui/CursorGlow";
import { useCursorGlow } from "../hooks/useCursorGlow";

export default function HeroSection() {
  const { ref, mousePosition, isHovered, setIsHovered } = useCursorGlow();

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-50 px-6 sm:px-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CursorGlow mousePosition={mousePosition} isHovered={isHovered} />

      <motion.div
        className="max-w-4xl text-center relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Crafting Digital
          <br />
          <span className="text-zinc-400">Experiences</span>
        </motion.h1>

        <motion.p
          className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          I design and develop modern web interfaces that are clean, intuitive, and impactful.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-zinc-50 text-zinc-950 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-zinc-100 w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>

          <motion.a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3 text-zinc-300 text-sm font-medium rounded-lg border border-zinc-800 transition-all duration-200 hover:border-zinc-600 hover:text-zinc-100 w-full sm:w-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Work
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
