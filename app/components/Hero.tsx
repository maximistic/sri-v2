'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Lenis from 'lenis';
import Fade from "./Fade";

const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative w-full h-[200vh] overflow-hidden bg-black"
    >
      <HeroSection scrollYProgress={scrollYProgress} />
      <NextSection />
    </main>
  );
}

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const HeroSection: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const translateY = useTransform(scrollYProgress, [0, 1], ['0vw', '10vw']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], ['0deg', '5deg']);

  return (
    <motion.section
      style={{ translateY, scale, rotateZ }}
      className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50"
    >
      {/* Simple accent shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-yellow-200/20 rounded-full blur-3xl" />
      
      <div
        className="relative w-full h-full flex flex-col items-center justify-center text-center px-6"
        style={{ perspective: '1000px' }}
      >
        <div className="max-w-[60vw] relative">
        </div>
      </div>
    </motion.section>
  );
};

const NextSection: React.FC = () => {
  return (
    <section className="relative z-0 -mt-1 w-full h-screen bg-white flex items-center justify-center">
      <h2 className="text-4xl text-black font-bold"><Fade value={para} /></h2>
    </section>
  );
};

export default Hero;