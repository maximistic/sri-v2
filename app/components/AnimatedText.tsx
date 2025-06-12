'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  delay = 0,
}) => (
  <motion.span
    className={`inline-block ${className}`}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay,
      duration: 0.4,
      ease: 'easeOut',
    }}
  >
    {children}
  </motion.span>
);
