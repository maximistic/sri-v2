'use client';

import { useScroll, useSpring, motion } from 'framer-motion';
import { RefObject } from 'react';

type ScrollProgressProps = {
  containerRef?: RefObject<HTMLElement>;
  className?: string;
  springOptions?: Parameters<typeof useSpring>[1];
};

export default function ScrollProgress({
  containerRef,
  className = '',
  springOptions,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.5,
    ...springOptions,
  });

  return (
    <motion.div
      className={className}
      style={{
        scaleY: smoothProgress,
        transformOrigin: 'top',
      }}
    />
  );
}
