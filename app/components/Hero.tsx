"use client";
import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 50;
    const rotateY = (centerX - x) / 50;
    
    if (titleRef.current) {
      (titleRef.current as HTMLElement).style.transform = 
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (titleRef.current) {
      (titleRef.current as HTMLElement).style.transform = 
        'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl text-center relative z-10">
        <h1 
          ref={titleRef}
          className={`text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mb-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease-out'
          }}
        >
          Crafting Digital
          <br />
          <span className="relative inline-block">
            Experiences
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-30" />
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className={`text-zinc-400 text-lg sm:text-xl md:text-2xl mb-12 font-light leading-relaxed transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          I design and build modern web interfaces that are{' '}
          <span className="text-zinc-200 font-medium">clean</span>,{' '}
          <span className="text-zinc-200 font-medium">intuitive</span>, and{' '}
          <span className="text-zinc-200 font-medium">impactful</span>.
        </p>
        
        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="#contact"
            className="group relative inline-block bg-zinc-100 text-zinc-900 px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-100/10 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Get in Touch</span>

            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#work"
            className="group relative inline-block border border-zinc-700 px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/50 hover:-translate-y-0.5 backdrop-blur-sm overflow-hidden"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/0 via-zinc-700/20 to-zinc-800/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '600ms' }}>
          <div className="flex flex-col items-center text-zinc-500 text-xs">
            <span className="mb-2 tracking-wider uppercase">Scroll</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}