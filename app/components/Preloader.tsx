'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const opacity = {
  initial: { opacity: 0 },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 }
  }
};

const slideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
  }
};

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

interface Dimensions {
  width: number;
  height: number;
}

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<Dimensions>({ width: 0, height: 0 });
  const [progress, setProgress] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + 3;
      });
    }, 40);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const delay = index === 0 ? 250 : 280;
    const timeout = setTimeout(() => setIndex(prev => prev + 1), delay);
    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: isComplete ? 0.2 : 0.5 }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-[99] flex flex-col items-center justify-center"
    >
      {dimension.width > 0 && (
        <>
          <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex flex-col items-center text-white mb-8 md:mb-12 z-10"
          >
            <div className="flex items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
              <motion.div
                className="w-3 h-3 bg-blue-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-light tracking-wide">{words[index]}</span>
            </div>
            
            <motion.div
              className="flex space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 0.6, 
                    repeat: Infinity, 
                    delay: i * 0.1 
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <div className="absolute bottom-8 sm:bottom-12 w-full flex flex-col items-center px-6 z-10">
            <motion.div
              className="text-white text-5xl sm:text-6xl lg:text-7xl font-thin mb-6 tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {Math.round(progress)}
              <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 ml-1">%</span>
            </motion.div>

            <div className="w-full max-w-sm md:max-w-md lg:max-w-xl h-0.5 bg-slate-700 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-white/20 rounded-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ left: `${progress - 10}%` }}
              />
            </div>
          </div>

          <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] z-0 pointer-events-none">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="url(#gradient)"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
          </svg>
        </>
      )}
    </motion.div>
  );
}