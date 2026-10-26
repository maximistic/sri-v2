'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Lagging ring that swells over anything clickable. Fine pointers only. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 450, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 450, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setActive(!!(e.target as HTMLElement | null)?.closest?.('a, button, [data-cursor]'));
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[101] -ml-4 -mt-4 h-8 w-8 rounded-full border border-primary"
      style={{ x: sx, y: sy }}
      animate={{
        scale: active ? 1.9 : 1,
        backgroundColor: active
          ? 'color-mix(in oklch, var(--primary) 20%, transparent)'
          : 'color-mix(in oklch, var(--primary) 0%, transparent)',
      }}
      transition={{ duration: 0.25 }}
    />
  );
}
