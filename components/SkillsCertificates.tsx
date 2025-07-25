'use client';

import React, { useState, useRef, MouseEvent, useEffect } from 'react';

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    organization: "Tech Academy",
    date: "2024",
    image: "/certificates/cert1.jpg",
    description: "Complete web development certification covering React, Node.js, and databases"
  },
  {
    id: 2,
    title: "Cloud Architecture",
    organization: "AWS",
    date: "2023",
    image: "/certificates/cert2.jpg",
    description: "Advanced cloud computing and architecture principles"
  },
  {
    id: 3,
    title: "UI/UX Design",
    organization: "Design Institute",
    date: "2023",
    image: "/certificates/cert3.jpg",
    description: "User interface and experience design fundamentals"
  },
  {
    id: 4,
    title: "Machine Learning",
    organization: "Data Science Pro",
    date: "2024",
    image: "/certificates/cert4.jpg",
    description: "Machine learning algorithms and implementation"
  },
  {
    id: 5,
    title: "Cybersecurity",
    organization: "Security First",
    date: "2023",
    image: "/certificates/cert5.jpg",
    description: "Information security and ethical hacking principles"
  },
  {
    id: 6,
    title: "Mobile Development",
    organization: "Mobile Masters",
    date: "2024",
    image: "/certificates/cert6.jpg",
    description: "iOS and Android application development"
  }
];

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
      
      // Constrain preview within container bounds
      const previewWidth = 320; // 80 * 4 (w-80)
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
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">My Certificates</h1>
        
        <div 
          ref={containerRef}
          className="relative"
          onMouseMove={handleMouseMove}
        >
          {/* Desktop: Floating certificate preview */}
          {hoveredIndex !== null && !isMobile && (
            <div 
              className="absolute pointer-events-none z-50 transition-opacity duration-300"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 100,
                opacity: hoveredIndex !== null ? 1 : 0
              }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 w-80 shadow-2xl">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">🏆</div>
                      <div className="text-sm opacity-80">Certificate Preview</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certificate list */}
          <div className="space-y-1">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`group relative border-b border-gray-800 hover:border-gray-600 transition-all duration-300 ${
                  isMobile ? 'cursor-pointer' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMobileClick(index)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-6 px-4 cursor-pointer">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                      <h2 className="text-xl md:text-2xl font-light group-hover:text-white transition-colors duration-300">
                        {cert.title}
                      </h2>
                      <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        {cert.organization}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
                      {cert.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 mt-3 md:mt-0">
                    <span className="text-gray-500 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                      {cert.date}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                      {isMobile && (
                        <div className={`transform transition-transform duration-300 ${
                          expandedMobile === index ? 'rotate-180' : ''
                        }`}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4 6l4 4 4-4H4z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile: Expanded content */}
                {isMobile && expandedMobile === index && (
                  <div className="px-4 pb-4 border-t border-gray-800 mt-4">
                    <div className="pt-4">
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center justify-center mb-4 h-32 bg-gray-800 rounded-lg">
                          <div className="text-center text-white">
                            <div className="text-3xl font-bold mb-2">🏆</div>
                            <div className="text-sm opacity-80">Certificate</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-white">
                            {cert.title}
                          </h3>
                          <p className="text-gray-300 font-medium">
                            {cert.organization}
                          </p>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {cert.description}
                          </p>
                          <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                            <span className="text-gray-300 font-medium">Completed</span>
                            <span className="text-white font-semibold">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 text-sm">
            {isMobile ? 'Tap certificates to expand details' : 'Hover over certificates to see previews'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;