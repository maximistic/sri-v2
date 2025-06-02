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

    gsap.to('.digit', {
      top: '-150px',
      stagger: { amount: 0.25 },
      delay: 6,
      duration: 1,
      ease: 'power4.inOut',
    });

    gsap.from('.loader-1', {
      width: 0,
      duration: 6,
      ease: 'power2.inOut',
    });

    gsap.from('.loader-2', {
      width: 0,
      delay: 1.9,
      duration: 6,
      ease: 'power2.inOut',
    });

    gsap.to(loaderRef.current, {
      background: 'none',
      delay: 6,
      duration: 0.1,
    });

    gsap.to('.loader-1', {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });

    gsap.to('.loader-2', {
      x: -75,
      y: 75,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(loaderRef.current, {
      scale: 40,
      duration: 1,
      delay: 7,
      ease: 'power2.inOut',
    });

    gsap.to('.loader', {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 8,
      ease: 'power2.inOut',
    });

    gsap.to('.loading-screen', {
      opacity: 0,
      duration: 1,
      delay: 9,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black text-white pointer-events-none z-50">
      <div
        className="loader absolute top-1/2 left-1/2 flex transform -translate-x-1/2 -translate-y-1/2 bg-gray-700"
        ref={loaderRef}
      >
        <div className="loader-1 bar bg-white h-[50px] w-[200px]" />
        <div className="loader-2 bar bg-white h-[50px] w-[100px]" />
      </div>

      <div className="counter fixed left-12 bottom-12 flex h-[100px] text-[100px] font-light leading-[102px] overflow-hidden">
        <div ref={counter1Ref} className="counter-1 digit relative -top-[15px]">
          <div className="num">0</div>
          <div className="num relative -right-[25px]">1</div>
        </div>

        <div ref={counter2Ref} className="counter-2 digit relative -top-[15px]">
          {Array.from({ length: 11 }, (_, i) => (
            <div
              key={i}
              className={`num ${i === 1 ? 'relative -right-[10px]' : ''}`}
            >
              {i === 10 ? 0 : i}
            </div>
          ))}
        </div>

        <div ref={counter3Ref} className="counter-3 digit relative -top-[15px]" />
      </div>
    </div>
  );
}
