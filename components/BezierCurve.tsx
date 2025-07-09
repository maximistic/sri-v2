'use client';

import { useEffect, useRef } from 'react';

const BezierCurve = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const x = useRef(0.5);
  const time = useRef(Math.PI / 2);
  const reqId = useRef<number | null>(null);

  const setPath = (value: number) => {
    const svg = pathRef.current?.ownerSVGElement;
    if (!svg || !pathRef.current) return;

    const w = svg.clientWidth;
    const h = svg.clientHeight;

    pathRef.current.setAttribute(
      'd',
      `M0 ${h / 2} Q${w * x.current} ${h / 2 + value} ${w} ${h / 2}`
    );
  };

  const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

  const animateIn = () => {
    if (reqId.current) cancelAnimationFrame(reqId.current);
    time.current = Math.PI / 2;
    setPath(progress.current);
    reqId.current = requestAnimationFrame(animateIn);
  };

  const animateOut = () => {
    const newP = progress.current * Math.sin(time.current);
    setPath(newP);
    progress.current = lerp(progress.current, 0, 0.04);
    time.current += 0.2;

    if (Math.abs(progress.current) > 0.5) {
      reqId.current = requestAnimationFrame(animateOut);
    } else {
      time.current = Math.PI / 2;
      progress.current = 0;
      setPath(0);
    }
  };

  const resetAnimation = () => {
    if (reqId.current) cancelAnimationFrame(reqId.current);
    animateOut();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = svgWrapperRef.current?.getBoundingClientRect();
    if (!box) return;

    x.current = (e.clientX - box.left) / box.width;
    progress.current += e.movementY;
  };

  useEffect(() => {
    const handleResize = () => setPath(progress.current);
    setPath(0);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-12 bg-gray-900">
      <div
        ref={svgWrapperRef}
        className="relative w-full max-w-6xl mx-auto h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
      >
        <div
          onMouseEnter={animateIn}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetAnimation}
          className="absolute inset-0 z-10 cursor-pointer"
        />
        <svg className="w-full h-full" role="presentation" aria-hidden="true">
          <path ref={pathRef} stroke="#fff" strokeWidth={2} fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default BezierCurve;
