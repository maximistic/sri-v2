"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShimmerButton from "./ui/ShimmerButton";
import DotField from "./ui/DotField";
import Clock from "./ui/Clock";
import Reveal from "./ui/Reveal";

const WORDS = ["interfaces", "APIs", "systems", "tools"];

function Rotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block overflow-hidden pb-[0.15em] -mb-[0.15em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={WORDS[i]}
          className="block font-serif font-normal italic text-primary"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function HeroSection({ ready }: { ready: boolean }) {
  return (
    <section
      id="home"
      className="relative flex min-h-svh w-full flex-col justify-end overflow-hidden px-6 pb-10 pt-32 sm:px-10"
    >
      <DotField />

      <motion.div
        className="relative z-10 mb-auto flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <span className="text-foreground">Srikailaash Kumar S</span>
        <span>Software Engineer</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open to opportunities
        </span>
        <Clock />
      </motion.div>

      <div className="pointer-events-none relative z-10 mt-16">
        <h1 className="text-[clamp(3.25rem,11vw,10.5rem)] font-semibold leading-[0.9] tracking-tighter">
          <Reveal ready={ready} delay={0.1}>I build</Reveal>
          <Reveal ready={ready} delay={0.2}><Rotator /></Reveal>
          <Reveal ready={ready} delay={0.3}>that hold up.</Reveal>
        </h1>
      </div>

      <motion.div
        className="relative z-10 mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          B.Tech in Computer Science, Amrita Vishwa Vidyapeetham. I care about readable
          code and interfaces that don&apos;t feel like an afterthought.
        </p>
        <div className="flex flex-wrap gap-3">
          <ShimmerButton href="#projects" variant="solid">Selected work</ShimmerButton>
          <ShimmerButton href="#contact">Get in touch</ShimmerButton>
        </div>
      </motion.div>
    </section>
  );
}
