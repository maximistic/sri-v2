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
      className="relative w-full h-[200vh] overflow-hidden bg-gray-100"
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
      className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-orange-100 text-yellow-950 text-center px-6"
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        <div className="max-w-[60vw]">
          <h1 className="text-[4vw] font-bold leading-tight">
            Engineering Experiences. Not Just Interfaces.
          </h1>
          <h2 className="text-[2.5vw] text-orange-100 font-semibold mt-4 bg-yellow-700">
            Building tech that makes a difference.
          </h2>
          <p className="text-[1.2vw] text-gray-700 mt-6">
            I care about how things look — but more about how they work. My portfolio is a
            playground of scalable, performant, and user-first designs. Let&#39;s build something better.
          </p>

          <motion.a
            href="#projects"
            className="inline-block mt-10 px-8 py-3 bg-orange-400 text-yellow-950 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
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