'use client';

import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { experiences } from '@/lib';
import Image from 'next/image';


function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section 
      id="experience" 
      className="mb-12 scroll-mt-16 md:mb-16 lg:mb-24 lg:scroll-mt-24" 
      aria-label="Work experience"
    >
      <div>
        <ol className="group/list">
          {experiences.map((experience) => (
            <li key={experience.id} className="mb-12">
              <div 
                className={`group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 ${
                  hoveredId && hoveredId !== experience.id ? 'lg:opacity-50' : ''
                } lg:group-hover/list:opacity-50`}
                onMouseEnter={() => setHoveredId(experience.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header 
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2" 
                  aria-label={experience.dateLabel}
                >
                  {experience.dateRange}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a 
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base" 
                        href={experience.companyUrl} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {experience.title} · {' '}
                          <span className="inline-block">
                            {experience.company}
                            <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true" />
                          </span>
                        </span>
                      </a>
                    </div>
                    {experience.positions && experience.positions.map((position, index) => (
                      <div key={index}>
                        <div className="text-muted-foreground" aria-hidden="true">
                          {position}
                        </div>
                      </div>
                    ))}
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {experience.description}
                  </p>
                  {experience.links && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                      {experience.links.map((link, index) => (
                        <li key={index} className="mr-4">
                          <a 
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary focus-visible:text-primary" 
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer noopener" 
                            aria-label={`${link.label} (opens in a new tab)`}
                          >
                            <ExternalLink className="mr-1 h-3 w-3" aria-hidden="true" />
                            <span>{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech, index) => (
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full résumé (opens in a new tab)"
            className="group inline-flex items-center gap-1 text-base font-semibold text-foreground hover:text-primary focus-visible:text-primary transition-colors"
          >
            View Full <span>Résumé</span>
            <ExternalLink
              className="h-4 w-4 transform transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transform-none"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioLayout() {
  return (
    <div className="bg-background leading-relaxed text-muted-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <Link href="/" className="hover:text-primary transition-colors">
                  Code & Create
                </Link>
              </h1>
              
              {/* Profile Image */}
              <div className="mt-6 lg:mt-8">
                <div className="relative w-32 h-32 lg:w-100 lg:h-100">
                  <Image
                    src="/images/man1.webp"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="rounded-full object-cover w-full h-full border-2 border-border hover:border-primary transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-sm text-muted-foreground">
                © 2024 — Crafted with care
              </p>
            </div>
          </header>

          <main id="content" className="pt-16 lg:w-1/2 lg:py-16">
            <ExperienceSection />
          </main>
        </div>
      </div>
    </div>
  );
}