'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  children: ReactNode;
}

export default function SectionHeading({ index, label, children }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-24">
      <div className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-primary">[{index}]</span>
        <span>{label}</span>
        <motion.span
          className="h-px flex-1 origin-left bg-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
      <h2 className="text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tighter [&_em]:font-serif [&_em]:font-normal [&_em]:text-primary">
        <Reveal>{children}</Reveal>
      </h2>
    </div>
  );
}
