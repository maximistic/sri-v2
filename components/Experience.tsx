'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { expCards } from '@/lib';
import SectionHeading from './ui/SectionHeading';

const entries = expCards.filter((c) => c.title !== 'coming up');

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });

  return (
    <section id="experience" className="px-6 py-28 sm:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="Experience">
          Story <em>so far.</em>
        </SectionHeading>

        <div ref={ref} className="relative">
          {/* the line draws itself as you scroll */}
          <div className="absolute bottom-0 left-0 top-0 w-px bg-border md:left-[220px]">
            <motion.div className="h-full origin-top bg-primary" style={{ scaleY: scrollYProgress }} />
          </div>

          <ol className="space-y-20">
            {entries.map((card) => (
              <motion.li
                key={card.title}
                className="relative grid gap-4 pl-8 md:grid-cols-[220px_1fr] md:gap-16 md:pl-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full bg-primary ring-4 ring-background md:left-[215px]" />

                <div className="pr-10 font-mono text-xs uppercase leading-relaxed tracking-widest text-muted-foreground md:text-right">
                  <div className="text-foreground">{card.date}</div>
                  <div className="mt-1">{card.engType?.join(' · ')}</div>
                </div>

                <div className="md:pl-10">
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{card.title}</h3>
                  <div className="mt-4 flex items-center gap-3 text-muted-foreground">
                    <Image
                      src={card.logoPath}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-serif text-xl italic">{card.institute}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {card.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3 text-muted-foreground">
                        <span className="font-mono text-primary">›</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}

            <li className="relative pl-8 md:grid md:grid-cols-[220px_1fr] md:gap-16 md:pl-0">
              <span className="absolute -left-[5px] top-1 h-[11px] w-[11px] rounded-full border border-primary bg-background md:left-[215px]" />
              <span />
              <p className="font-mono text-sm text-muted-foreground md:pl-10">
                next entry pending<span className="ml-1 text-primary" style={{ animation: 'blink 1s steps(1) infinite' }}>▍</span>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
