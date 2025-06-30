'use client';

import { motion, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import React, { useState, useRef } from 'react';

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

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-center gap-4 group"
  >
    <div className="w-12 h-12 border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-zinc-800/50 group-hover:border-zinc-600 transition-all duration-300">
      {icon}
    </div>
    <div>
      <div className="text-sm text-zinc-500 mb-1 tracking-wide">
        {label}
      </div>
      <div className="text-zinc-100 font-medium text-lg">
        {value}
      </div>
    </div>
  </motion.div>
);

interface CustomCursorProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  isVisible: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, isVisible }) => (
  <motion.div
    className="fixed w-6 h-6 bg-zinc-100 rounded-full pointer-events-none z-50 mix-blend-difference"
    style={{ x, y, left: -12, top: -12 }}
    animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
    transition={{ type: 'spring', stiffness: 500, damping: 28 }}
  />
);

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  return (
    <div 
      className="relative h-[100vh] w-full bg-zinc-950"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div 
        ref={containerRef}
        className="fixed bottom-0 h-[100vh] w-full cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CustomCursor x={springX} y={springY} isVisible={isHovered} />
        
        <div className="h-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Side - Main Content */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-zinc-100 tracking-tight leading-tight">
                    Let&apos;s Connect
                  </h1>
                  <motion.div 
                    className="w-24 h-px bg-zinc-700"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-zinc-400 text-xl sm:text-2xl leading-relaxed max-w-lg"
                >
                  Ready to bring your ideas to life? Let&apos;s create something extraordinary together.
                </motion.div>

                <motion.button
                  className="group inline-flex items-center gap-4 bg-zinc-100 text-zinc-900 px-10 py-5 rounded-full font-medium hover:bg-zinc-200 transition-colors cursor-none text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
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
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Right Side - Contact Info */}
              <div className="space-y-8 lg:space-y-10">
                <ContactItem 
                  icon={<Mail className="w-6 h-6" />} 
                  label="Email" 
                  value="hello@yourname.com" 
                  delay={0.7} 
                />
                <ContactItem 
                  icon={<Phone className="w-6 h-6" />} 
                  label="Phone" 
                  value="+1 (555) 123-4567" 
                  delay={0.8} 
                />
                <ContactItem 
                  icon={<MapPin className="w-6 h-6" />} 
                  label="Location" 
                  value="San Francisco, CA" 
                  delay={0.9} 
                />

                {/* Social Links */}
                <div className="pt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="text-sm text-zinc-500 mb-4 tracking-wide"
                  >
                    Follow
                  </motion.div>
                  <div className="flex gap-8">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((platform, index) => (
                      <motion.div
                        key={platform}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.8 }}
                        className="cursor-none"
                      >
                        <FlipText 
                          text={platform} 
                          className="text-zinc-500 hover:text-zinc-100 transition-colors text-lg" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;