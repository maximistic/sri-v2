'use client';

import { useRef, useEffect, ReactElement } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

interface FadeProps {
  value: string;
}

export default function Fade({ value }: FadeProps) {
  const refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.9}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string) => {
    const wordElements: ReactElement[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      wordElements.push(
        <p key={`${word}_${i}`} className="text-[3.5vw] mr-[1.5vw] font-bold m-0">
          {letters}
        </p>
      );
    });
    return wordElements;
  };

  const splitLetters = (word: string) => {
    const letters: ReactElement[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={`${letter}_${i}`}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
          className="opacity-20"
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div
      ref={container}
      className="flex h-screen items-end justify-center mb-[100vh] text-orange-300"
    >
      <div ref={body} className="w-[90%] flex flex-wrap">
        {splitWords(value)}
      </div>
    </div>
  );
}
