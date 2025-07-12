"use client";

import React from "react";
import { motion } from "framer-motion";
import ShimmerButton from "./ui/ShimmerButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-background text-foreground px-6 sm:px-8 overflow-hidden"
    >
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
          <span className="text-muted-foreground">Experiences</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto"
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
        <ShimmerButton
          href="#projects"
        >
          View Projects
        </ShimmerButton>
        <ShimmerButton
          href="#contact"
        >
          Contact Me
        </ShimmerButton>
        </motion.div>
      </motion.div>
    </section>
  );
}