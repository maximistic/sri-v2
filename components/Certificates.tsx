'use client';

import React, { useState, useRef, MouseEvent, useEffect } from 'react';
import { certificates } from '@/lib';
import { motion } from 'framer-motion';

const Certificate: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && !isMobile) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerWidth = rect.width;
      const containerHeight = rect.height;

      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      const previewWidth = 320;
      const previewHeight = 280;

      if (x + previewWidth + 20 > containerWidth) {
        x = containerWidth - previewWidth - 20;
      }
      if (y - 100 < 0) {
        y = 100;
      }
      if (y + previewHeight - 100 > containerHeight) {
        y = containerHeight - previewHeight + 100;
      }

      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
    }
  };

  const handleMobileClick = (index: number) => {
    if (isMobile) {
      setExpandedMobile(expandedMobile === index ? null : index);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8" id='certificates'>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-2xl mb-4">
            Certified Growth
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of certifications that reflect my journey of continuous learning
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative"
          onMouseMove={handleMouseMove}
        >
          {hoveredIndex !== null && !isMobile && (
            <div
              className="absolute pointer-events-none z-50 transition-opacity duration-300"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 100,
                opacity: hoveredIndex !== null ? 1 : 0
              }}
            >
              <div className="bg-card backdrop-blur-md border border-border rounded-lg p-4 w-80 shadow-2xl text-card-foreground">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <div className="text-2xl font-bold mb-2">🏆</div>
                      <div className="text-sm opacity-80">Certificate Preview</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {certificates[hoveredIndex].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {certificates[hoveredIndex].organization}
                </p>
                <p className="text-xs text-muted-foreground">
                  {certificates[hoveredIndex].description}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-1">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`group relative border-b border-border hover:border-muted transition-all duration-300 ${
                  isMobile ? 'cursor-pointer' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMobileClick(index)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-6 px-4 cursor-pointer">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                      <h2 className="text-xl md:text-2xl font-light group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h2>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {cert.organization}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300 text-sm md:text-base">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 mt-3 md:mt-0">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm md:text-base">
                      {cert.date}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                      {isMobile && (
                        <div
                          className={`transform transition-transform duration-300 ${
                            expandedMobile === index ? 'rotate-180' : ''
                          }`}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 6l4 4 4-4H4z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {isMobile && expandedMobile === index && (
                  <div className="px-4 pb-4 border-t border-border mt-4">
                    <div className="pt-4">
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-4 border border-border">
                        <div className="flex items-center justify-center mb-4 h-32 bg-gradient-to-br from-primary to-accent rounded-lg">
                          <div className="text-center text-primary-foreground">
                            <div className="text-3xl font-bold mb-2">🏆</div>
                            <div className="text-sm opacity-80">Certificate</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-primary">
                            {cert.title}
                          </h3>
                          <p className="text-foreground font-medium">
                            {cert.organization}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {cert.description}
                          </p>
                          <div className="flex justify-between items-center pt-2 border-t border-border">
                            <span className="text-primary font-medium">Completed</span>
                            <span className="text-foreground font-semibold">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            {isMobile ? 'Tap certificates to expand details' : 'Hover over certificates to see previews'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
