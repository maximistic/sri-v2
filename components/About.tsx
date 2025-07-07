'use client';

import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface ExperienceItem {
  id: string;
  dateRange: string;
  dateLabel: string;
  title: string;
  company: string;
  companyUrl: string;
  positions?: string[];
  description: string;
  technologies: string[];
  links?: {
    label: string;
    url: string;
    icon?: string;
  }[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'klaviyo',
    dateRange: '2024 — Present',
    dateLabel: '2024 to Present',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    companyUrl: 'https://www.klaviyo.com',
    description: 'Build and maintain critical components used to construct Klaviyo\'s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
  },
  {
    id: 'upstatement',
    dateRange: '2018 — 2024',
    dateLabel: '2018 to 2024',
    title: 'Lead Engineer',
    company: 'Upstatement',
    companyUrl: 'https://upstatement.com',
    positions: ['Senior Engineer', 'Engineer'],
    description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'React Native', 'WordPress', 'Contentful', 'Node.js', 'PHP']
  },
  {
    id: 'apple',
    dateRange: 'July — Dec 2017',
    dateLabel: 'July to December 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    companyUrl: 'https://www.apple.com/apple-music/',
    description: 'Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music\'s embeddable web player widget for in-browser user authorization and full song playback.',
    technologies: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
    links: [
      { label: 'MusicKit.js', url: 'https://developer.apple.com/documentation/musickitjs' },
      { label: '9to5Mac', url: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/' },
      { label: 'The Verge', url: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming' }
    ]
  },
  {
    id: 'scout',
    dateRange: '2016 — 2017',
    dateLabel: '2016 to 2017',
    title: 'Developer',
    company: 'Scout Studio',
    companyUrl: 'https://scout.camd.northeastern.edu/',
    description: 'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.',
    technologies: ['Jekyll', 'SCSS', 'JavaScript', 'WordPress']
  },
  {
    id: 'starry',
    dateRange: 'July — Dec 2016',
    dateLabel: 'July to December 2016',
    title: 'Software Engineer Co-op',
    company: 'Starry',
    companyUrl: 'https://starry.com/',
    description: 'Worked with the UI team to engineer and improve major features of Starry\'s customer-facing Android app.',
    technologies: ['Cordova', 'Backbone', 'JavaScript', 'CSS'],
    links: [
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US' },
      { label: 'ScreenTime 2.0', url: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents' }
    ]
  },
  {
    id: 'mullenlowe',
    dateRange: 'July — Dec 2015',
    dateLabel: 'July to December 2015',
    title: 'Creative Technologist Co-op',
    company: 'MullenLowe U.S.',
    companyUrl: 'https://us.mullenlowe.com/',
    description: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
];

function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section 
      id="experience" 
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" 
      aria-label="Work experience"
    >
      {/* Sticky header for mobile
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div> */}

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
                {/* Background highlight on hover */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                
                {/* Date range */}
                <header 
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" 
                  aria-label={experience.dateLabel}
                >
                  {experience.dateRange}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a 
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
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
                        <div className="text-slate-500" aria-hidden="true">
                          {position}
                        </div>
                      </div>
                    ))}
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {experience.description}
                  </p>

                  {/* Related links */}
                  {experience.links && (
                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                      {experience.links.map((link, index) => (
                        <li key={index} className="mr-4">
                          <a 
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" 
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

                  {/* Technologies */}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech, index) => (
                      <li key={index} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
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

        {/* View Full Resume link */}
        <div className="mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full résumé (opens in a new tab)"
            className="group inline-flex items-center gap-1 text-base font-semibold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
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
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/" className="hover:text-teal-300">Developer</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Frontend Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
              
              {/* Navigation */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {['about', 'experience', 'projects'].map((section) => (
                    <li key={section}>
                      <a className="group flex items-center py-3" href={`#${section}`}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" />
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Social Links
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="https://github.com/johndeveloper" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/johndeveloper" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="mailto:john@example.com" aria-label="Email" title="Email">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </li>
            </ul> */}
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <ExperienceSection />
          </main>
        </div>
      </div>
    </div>
  );
}