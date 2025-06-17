'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { interpolate } from 'flubber';

type NavLink = { href: string; label: string };

interface MorphingMenuProps {
  links: NavLink[];
  overlayBg?: string;
}

const hamburgerPaths = [
  'M3,7 L21,7',
  'M3,12 L21,12',
  'M3,17 L21,17',
];

const closePaths = [
  'M5,5 L19,19',
  'M12,12 L12,12',
  'M5,19 L19,5',
];

const morphers = hamburgerPaths.map((h, i) =>
  interpolate(h, closePaths[i], { maxSegmentLength: 0.5 })
);

export default function MorphingMenu({
  links,
  overlayBg = 'bg-zinc-900',
}: MorphingMenuProps) {
  const [isOpen, setOpen] = useState(false);
  const [t, setT] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    let frame: number;
    const duration = 400;
    const start = performance.now();
    const from = isOpen ? 0 : 1;
    const to = isOpen ? 1 : 0;

    const animate = (now: number) => {
      const dt = now - start;
      const tt = Math.min(dt / duration, 1);
      setT(from + (to - from) * tt);
      if (tt < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="relative z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          {hamburgerPaths.map((_, i) => (
            <motion.path
              key={i}
              d={morphers[i](t)}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ opacity: i === 1 ? 1 - t : 1 }}
            />
          ))}
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed inset-0 ${overlayBg} z-40 flex items-center justify-center`}
          >
            <nav className="flex flex-col space-y-6 w-full max-w-5xl px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                >
                  {/* Index */}
                  <div className="text-sm md:text-base w-12 text-emerald-100">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Divider */}
                  <div className="flex-1 h-px bg-emerald-300 opacity-30 mx-4"></div>

                  {/* Label */}
                  <div
                    className={`text-right text-5xl md:text-7xl font-serif transition-all duration-300 ${
                      hoveredIndex === null
                        ? 'text-emerald-100 opacity-100'
                        : hoveredIndex === i
                        ? 'text-white opacity-100'
                        : 'text-emerald-100 opacity-30'
                    }`}
                  >
                    {l.label}
                  </div>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}