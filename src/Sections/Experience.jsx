import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useDragControls, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'React Developer Certification',
    image: '/api/placeholder/300/200',
    issuer: 'React University',
    date: 'May 2023',
    description: 'Advanced concepts in React development including hooks, context, and performance optimization.'
  },
  {
    id: 2,
    title: 'JavaScript Mastery Certificate',
    image: '/api/placeholder/300/200',
    issuer: 'JavaScript Institute',
    date: 'January 2023',
    description: 'Comprehensive understanding of JavaScript including ES6+, async programming, and functional concepts.'
  },
  {
    id: 3,
    title: 'Tailwind CSS Expert',
    image: '/api/placeholder/300/200',
    issuer: 'CSS Wizards Academy',
    date: 'March 2023',
    description: 'Mastery in building responsive and customized user interfaces using Tailwind CSS.'
  },
  {
    id: 4,
    title: 'Web Accessibility Specialist',
    image: '/api/placeholder/300/200',
    issuer: 'A11Y Foundation',
    date: 'June 2023',
    description: 'Expertise in creating inclusive web experiences and implementing WCAG guidelines.'
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const dragControls = useDragControls();

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const { scrollX } = useScroll({ container: containerRef });

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      <h1 className="text-4xl font-bold text-center py-8">My Certifications</h1>
      
      <div className="relative px-16">
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black border border-white z-10
            ${canScrollLeft ? 'opacity-100 hover:bg-gray-800' : 'opacity-30 cursor-not-allowed'}`}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
          ref={containerRef}
          className="flex overflow-x-scroll select-none"
          style={{ 
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style jsx global>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .overflow-x-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <motion.div 
            className="flex space-x-8 px-8"
            drag="x"
            dragControls={dragControls}
            dragConstraints={containerRef}
            dragElastic={0.1}
            dragMomentum={false}
            onDragStart={(e) => {
              if (e.target.setPointerCapture) {
                e.target.setPointerCapture(e.pointerId);
              }
            }}
          >
            {certifications.map((cert, index) => (
              <CertCard 
                key={cert.id}
                cert={cert}
                index={index}
                scrollX={scrollX}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </motion.div>
        </div>

        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black border border-white z-10
            ${canScrollRight ? 'opacity-100 hover:bg-gray-800' : 'opacity-30 cursor-not-allowed'}`}
          disabled={!canScrollRight}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const CertCard = ({ cert, index, scrollX, onClick }) => {
  const x = useTransform(scrollX, [index * 400, (index + 1) * 400], [0, -100]);
  const scale = useTransform(scrollX, [index * 400, (index + 1) * 400], [1, 0.8]);
  const rotate = useTransform(scrollX, [index * 400, (index + 1) * 400], [0, -10]);

  return (
    <motion.div 
      className="flex-shrink-0 w-80 h-96 bg-black rounded-xl overflow-hidden cursor-pointer select-none
        border border-white/30 transition-all duration-300"
      style={{ x, scale, rotate, transformStyle: 'preserve-3d' }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: '2px'
      }}
      onClick={onClick}
    >
      <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" draggable="false" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
        <p className="text-sm text-gray-400">{cert.issuer} | {cert.date}</p>
      </div>
    </motion.div>
  );
};

const CertModal = ({ cert, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-black rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full m-4
          border border-white/30"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <img src={cert.image} alt={cert.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{cert.title}</h2>
          <p className="text-green-500 mb-4">
            Issued by {cert.issuer} | {cert.date}
          </p>
          <p className="text-gray-300 mb-6">{cert.description}</p>
          <div className="flex justify-between items-center">
            <button 
              className="bg-green-500 text-black py-2 px-6 rounded-lg font-semibold
                hover:bg-green-600 transition-colors duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Certifications;