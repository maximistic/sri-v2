"use client";

import React from "react";
import Marquee from "./ui/marquee";

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />
          
          <Marquee />
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-zinc-500">
            Hover over the logos to slow down the animation
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;