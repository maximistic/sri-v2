'use client';

import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import FlipText from './ui/FlipText';
import Clock from './ui/Clock';
import Reveal from './ui/Reveal';

const EMAIL = 'srikailaash.pr@gmail.com';

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/srikailaashkumar-s/' },
  { label: 'GitHub', href: 'https://github.com/maximistic' },
];

const ContactSection: React.FC = () => {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success('Email copied');
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    // footer stays fixed underneath; the page above scrolls away to reveal it
    <div
      id="contact"
      className="relative min-h-svh w-full bg-primary text-primary-foreground"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 flex h-svh w-full flex-col justify-between px-6 pb-8 pt-28 sm:px-10">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
          <span>[04] Contact</span>
          <Clock />
        </div>

        <div>
          <h2 className="text-[clamp(3.5rem,13vw,12rem)] font-semibold leading-[0.88] tracking-tighter">
            <Reveal>Let&apos;s build</Reveal>
            <Reveal delay={0.1}>
              <span className="font-serif font-normal italic">something.</span>
            </Reveal>
          </h2>

          <button
            onClick={copy}
            data-cursor
            className="group mt-10 inline-flex cursor-pointer items-center gap-4 break-all border-b-2 border-primary-foreground/40 pb-2 text-left text-xl font-medium transition-colors hover:border-primary-foreground sm:text-3xl"
            aria-label="Copy email address"
          >
            {EMAIL}
            <Copy className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
          </button>
        </div>

        <div className="flex flex-col justify-between gap-6 font-mono text-xs uppercase tracking-widest sm:flex-row sm:items-end">
          <ul className="flex gap-8 text-base">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  <FlipText text={l.label} />
                </a>
              </li>
            ))}
          </ul>
          <p className="opacity-70">© 2025 Sri · India · Built with Next.js, tuned by hand</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
