'use client';

import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/lib';
import SectionHeading from './ui/SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 sm:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="Projects">
          Pixels, logic <em>&amp; chaos.</em>
        </SectionHeading>

        {/* hovering one row dims the rest */}
        <ol className="group/list border-b border-border">
          {projects.map((p, i) => (
            <motion.li
              key={p.id}
              className="group border-t border-border transition-opacity duration-300 group-hover/list:opacity-35 hover:opacity-100!"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={p.projectUrl}
                className="grid items-baseline gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                aria-label={`${p.title} (${p.domain})`}
              >
                <span className="font-mono text-sm text-primary md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="md:col-span-6">
                  <h3 className="flex items-center gap-3 text-3xl font-semibold tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-3 md:text-5xl">
                    {p.title}
                    <ArrowUpRight className="h-7 w-7 text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 md:h-9 md:w-9" />
                  </h3>
                  <p className="mt-3 text-muted-foreground transition-transform duration-500 ease-out group-hover:translate-x-3">
                    <span className="font-serif text-lg italic">{p.domain}</span> — {p.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground md:col-span-3">
                  {p.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-2 md:text-right">
                  {p.dateRange}
                </span>
              </a>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            Résumé
            <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/maximistic"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            All code on GitHub
            <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
