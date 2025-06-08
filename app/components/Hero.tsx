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
          <motion.h1 
            className="text-[3.5vw] font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineering Experiences.
          </motion.h1>
          
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block text-[2vw] bg-orange-500 text-white font-semibold px-4 py-1 rounded-md shadow-sm">
              Building tech that makes a difference.
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-[3.5vw] font-bold leading-tight mt-2 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Not Just Interfaces.
          </motion.h2>

          <motion.p 
            className="text-[1.2vw] text-gray-600 mt-6 leading-relaxed max-w-[50vw] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I care about how things look — but more about how they work. My portfolio is a
            playground of scalable, performant, and user-first designs. Let&#39;s build something better.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
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