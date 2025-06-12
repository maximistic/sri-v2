'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[800px] w-full">
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Section1() {
  return (
    <div>
      <Nav />
    </div>
  );
}

function Section2() {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
      <p>©copyright</p>
    </div>
  );
}

function Nav() {
  const aboutLinks = ['Home', 'Projects', 'Our Mission', 'Contact Us'];
  const educationLinks = ['News', 'Learn', 'Certification', 'Publications'];

  return (
    <div className="flex shrink-0 gap-20">
      <NavColumn title="About" links={aboutLinks} />
      <NavColumn title="Education" links={educationLinks} />
    </div>
  );
}

interface NavColumnProps {
  title: string;
  links: string[];
}

function NavColumn({ title, links }: NavColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="mb-2 uppercase text-[#ffffff80]">{title}</h3>
      {links.map((text, i) => (
        <AnimatedText key={i}>{text}</AnimatedText>
      ))}
    </div>
  );
}

interface AnimatedTextProps {
  children: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative inline-block overflow-hidden text-white cursor-pointer"
    >
      {/* Front layer */}
      <div className="relative z-10">
        {children.split('').map((char, index) => (
          <motion.span
            key={`front-${index}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
              delay: 0.025 * index,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Back layer */}
      <div className="absolute inset-0 z-0">
        {children.split('').map((char, index) => (
          <motion.span
            key={`back-${index}`}
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
              delay: 0.025 * index,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

