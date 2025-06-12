'use client';

import { motion, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import React, { useState, useRef } from 'react';

// FlipText Component (only used for specific elements now)
interface FlipTextProps {
  text: string;
  className?: string;
}

const FlipText: React.FC<FlipTextProps> = ({ text, className = '' }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative overflow-hidden inline-block ${className}`}
    >
      <span className="relative block">
        {text.split('').map((char, i) => (
          <motion.span
            key={`front-${i}`}
            variants={{ initial: { y: 0 }, hovered: { y: '-100%' } }}
            transition={{ duration: DURATION, ease: 'easeInOut', delay: STAGGER * i }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
      <span className="absolute top-0 left-0 block w-full h-full">
        {text.split('').map((char, i) => (
          <motion.span
            key={`back-${i}`}
            variants={{ initial: { y: '100%' }, hovered: { y: 0 } }}
            transition={{ duration: DURATION, ease: 'easeInOut', delay: STAGGER * i }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
};

// ContactItem Component (now with normal text)
interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-4 group"
  >
    <div className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 group-hover:bg-zinc-100 transition-colors">
      {icon}
    </div>
    <div>
      <div className="text-xs text-zinc-500 mb-1">
        {label}
      </div>
      <div className="text-zinc-900 font-medium">
        {value}
      </div>
    </div>
  </motion.div>
);

// CustomCursor Component
interface CustomCursorProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  isVisible: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, isVisible }) => (
  <motion.div
    className="absolute w-6 h-6 bg-zinc-900 rounded-full pointer-events-none z-50 mix-blend-difference"
    style={{ x, y, left: -12, top: -12 }}
    animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
  />
);

// ContactCard Component
const ContactCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-sm cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CustomCursor x={springX} y={springY} isVisible={isHovered} />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-light text-zinc-900 mb-4 tracking-tight">
              Let &#39;s Connect
            </h1>
            <div className="w-16 h-px bg-zinc-900" />
          </motion.div>

          <div className="space-y-6">
            <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" value="hello@yourname.com" delay={0.1} />
            <ContactItem icon={<Phone className="w-5 h-5" />} label="Phone" value="+1 (555) 123-4567" delay={0.2} />
            <ContactItem icon={<MapPin className="w-5 h-5" />} label="Location" value="San Francisco, CA" delay={0.3} />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-zinc-600 text-lg leading-relaxed">
              Ready to bring your ideas to life? Let &#39;s create something extraordinary together.
            </div>

            <motion.button
              className="group inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors cursor-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              {isButtonHovered ? (
                <FlipText text="Start a project" />
              ) : (
                <span>Start a project</span>
              )}
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </motion.button>

            <div className="flex gap-6 pt-8 justify-center lg:justify-start">
              {['LinkedIn', 'GitHub', 'Twitter'].map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="cursor-none"
                >
                  <FlipText 
                    text={platform} 
                    className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm sm:text-base" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ContactSection Component with gradient background
const ContactSection: React.FC = () => {
  return (
    <div 
      className="relative h-[100vh] w-full bg-gradient-to-br from-teal-100 via-white to-blue-50"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed bottom-0 h-[100vh] w-full flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-6xl w-full mx-auto py-20">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;