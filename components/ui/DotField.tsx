'use client';

import { useEffect, useRef } from 'react';

const GAP = 30;
const RADIUS = 150;
const PUSH = 26;

interface Dot {
  x: number;
  y: number;
  ox: number;
  oy: number;
}

/** Grid of dots that shy away from the cursor and light up in the accent colour. */
export default function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -9999, y: -9999 };
    let dots: Dot[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let frame = 0;
    let base = '#888';
    let accent = '#f60';

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      base = cs.getPropertyValue('--foreground').trim();
      accent = cs.getPropertyValue('--primary').trim();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) dots.push({ x, y, ox: 0, oy: 0 });
      }
    };

    const draw = () => {
      if (frame++ % 30 === 0) readColors();
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const power = dist < RADIUS ? (1 - dist / RADIUS) ** 2 : 0;
        const tx = dist > 0 ? (dx / dist) * power * PUSH : 0;
        const ty = dist > 0 ? (dy / dist) * power * PUSH : 0;
        d.ox += (tx - d.ox) * 0.14;
        d.oy += (ty - d.oy) * 0.14;

        const hot = power > 0.04;
        ctx.globalAlpha = hot ? 0.35 + power * 0.65 : 0.22;
        ctx.fillStyle = hot ? accent : base;
        ctx.beginPath();
        ctx.arc(d.x + d.ox, d.y + d.oy, 1.2 + power * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    });

    resize();
    readColors();
    draw();
    io.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
