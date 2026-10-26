'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.76, 0, 0.24, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  /** Hero passes this to hold the reveal until the preloader is gone. */
  ready?: boolean;
  className?: string;
}

/** Text slides up from behind a clip edge. The one entrance motion used site-wide. */
export default function Reveal({ children, delay = 0, ready, className = '' }: RevealProps) {
  const trigger =
    ready === undefined
      ? { whileInView: { y: 0 }, viewport: { once: true, margin: '-10% 0px' } }
      : { animate: { y: ready ? 0 : '110%' } };

  return (
    <span className={`block overflow-hidden pb-[0.15em] -mb-[0.15em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        {...trigger}
      >
        {children}
      </motion.span>
    </span>
  );
}
