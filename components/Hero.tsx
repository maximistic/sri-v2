"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ShimmerButton from "./ui/ShimmerButton";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, { type: "chars" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(subRef.current, {
        opacity: 0,
        y: 30,
        delay: 0.5,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(btnRef.current, {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-background text-foreground px-6 sm:px-10 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-dot-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-left">
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight"
        >
          Designing Digital{" "}
          <span className="text-muted-foreground">Experiences</span>
        </h1>

        <p
          ref={subRef}
          className="text-muted-foreground mt-6 text-lg sm:text-xl max-w-xl leading-relaxed"
        >
          I design and develop modern web interfaces that are clean and intuitive.
        </p>

        <div
          ref={btnRef}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <ShimmerButton href="#projects">View Projects</ShimmerButton>
          <ShimmerButton href="#contact">Contact Me</ShimmerButton>
        </div>
      </div>
    </section>
  );
}
