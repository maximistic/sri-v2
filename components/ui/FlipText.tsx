'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FlipTextProps {
  text: string;
  className?: string;
}

const FlipText: React.FC<FlipTextProps> = ({ text, className = '' }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative overflow-hidden inline-block ${className}`}
    >
      <span className="relative block">
        {text.split('').map((char, i) => (
          <motion.span
            key={`front-${i}`}
            variants={{ initial: { y: 0 }, hovered: { y: '-100%' } }}
            transition={{ duration: DURATION, ease: 'easeInOut', delay: STAGGER * i }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
      <span className="absolute top-0 left-0 block w-full h-full">
        {text.split('').map((char, i) => (
          <motion.span
            key={`back-${i}`}
            variants={{ initial: { y: '100%' }, hovered: { y: 0 } }}
            transition={{ duration: DURATION, ease: 'easeInOut', delay: STAGGER * i }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
};

export default FlipText;
