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
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const delay = index === 0 ? 300 : 320;
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
      className="fixed top-0 left-0 w-full h-full bg-[#873e23] z-[99] flex flex-col items-center justify-center"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex items-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 z-10"
          >
            <span className="block w-2 h-2 bg-white rounded-full mr-2" />
            {words[index]}
            <span className="ml-2 animate-bounce delay-100">.</span>
            <span className="ml-1 animate-bounce delay-200">.</span>
            <span className="ml-1 animate-bounce delay-300">.</span>
          </motion.p>

          <div className="absolute bottom-4 sm:bottom-6 w-full flex flex-col items-center px-4 z-10">
            <motion.div
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ delay: 0.4 }}
            >
              {Math.round(progress)}%
            </motion.div>

            <div className="w-full max-w-xs md:max-w-md lg:max-w-lg h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          </div>

          <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] z-0 pointer-events-none">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#873e23"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
