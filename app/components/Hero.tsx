"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          Crafting Digital Experiences
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl mb-8">
          I design and build modern web interfaces that are clean, intuitive, and impactful.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-zinc-100 text-zinc-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#work"
            className="inline-block border border-zinc-700 px-6 py-3 rounded-md text-sm font-medium hover:border-zinc-500 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
