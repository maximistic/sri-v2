'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen() {
  const counter1Ref = useRef<HTMLDivElement>(null);
  const counter2Ref = useRef<HTMLDivElement>(null);
  const counter3Ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const appendNumbers = (ref: HTMLDivElement | null, repeat: number) => {
      if (!ref) return;
      for (let i = 0; i < repeat; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement('div');
          div.className = 'num';
          div.textContent = j.toString();
          ref.appendChild(div);
        }
      }
      const finalDiv = document.createElement('div');
      finalDiv.className = 'num';
      finalDiv.textContent = '0';
      ref.appendChild(finalDiv);
    };

    appendNumbers(counter3Ref.current, 2);

    const animateCounter = (
      counter: HTMLDivElement | null,
      duration: number,
      delay = 0
    ) => {
      if (!counter) return;
      const num = counter.querySelector('.num');
      const numHeight = num?.clientHeight ?? 0;
      const totalDistance =
        (counter.querySelectorAll('.num').length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration,
        delay,
        ease: 'power2.inOut',
      });
    };

    animateCounter(counter3Ref.current, 5);
    animateCounter(counter2Ref.current, 6);
    animateCounter(counter1Ref.current, 2, 4);

    gsap.to('.loader-fill', {
      width: '300px',
      duration: 6,
      ease: 'power2.inOut',
    });

  }, []);

  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black text-white pointer-events-none z-50">
      <div
        className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700"
        ref={loaderRef}
      >
        <div className="loader-fill bg-white h-[50px] w-0" />
      </div>

      <div className="counter fixed left-4 sm:left-8 md:left-12 bottom-4 sm:bottom-8 md:bottom-12 flex h-[60px] sm:h-[80px] md:h-[100px] text-[60px] sm:text-[80px] md:text-[100px] font-light leading-[62px] sm:leading-[82px] md:leading-[102px] overflow-hidden pt-2 sm:pt-3 md:pt-4">
        <div ref={counter1Ref} className="counter-1 digit relative -top-[8px] sm:-top-[12px] md:-top-[15px]">
          <div className="num">0</div>
          <div className="num relative -right-[15px] sm:-right-[20px] md:-right-[25px]">1</div>
        </div>

        <div ref={counter2Ref} className="counter-2 digit relative -top-[8px] sm:-top-[12px] md:-top-[15px]">
          {Array.from({ length: 11 }, (_, i) => (
            <div
              key={i}
              className={`num ${i === 1 ? 'relative -right-[6px] sm:-right-[8px] md:-right-[10px]' : ''}`}
            >
              {i === 10 ? 0 : i}
            </div>
          ))}
        </div>

        <div ref={counter3Ref} className="counter-3 digit relative -top-[8px] sm:-top-[12px] md:-top-[15px]" />
      </div>
    </div>
  );
}