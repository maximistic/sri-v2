'use client';

import { motion } from 'framer-motion';
import { certificates } from '@/lib';
import SectionHeading from './ui/SectionHeading';

export default function Certificate() {
  return (
    <section id="certificates" className="px-6 py-28 sm:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="Certificates">
          Always <em>learning.</em>
        </SectionHeading>

        {/* tiles flood with the accent colour on hover */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.id}
              className="group flex min-h-64 flex-col justify-between bg-background p-7 transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/70">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{cert.date}</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight">{cert.title}</h3>
                <p className="mt-1 font-serif text-lg italic text-primary transition-colors duration-500 group-hover:text-primary-foreground">
                  {cert.organization}
                </p>
                <p className="mt-4 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/80">
                  {cert.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
