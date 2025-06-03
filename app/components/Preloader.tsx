'use client';

import { useEffect, useState } from 'react';
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
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
  }
};

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
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
    const timeout = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, delay);
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
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: isComplete ? 0.3 : 999 } 
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-[#141516] z-[99]"
    >
      {dimension.width > 0 && (
        <>
          <div className="flex flex-col items-center justify-center h-full w-full relative">
            <motion.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="flex items-center text-white text-[30px] z-10 mb-12"
            >
              <span className="block w-[10px] h-[10px] bg-white rounded-full mr-2"></span>
              {words[index]}
              <span className="ml-2 animate-bounce delay-100">.</span>
              <span className="ml-1 animate-bounce delay-100">.</span>
              <span className="ml-1 animate-bounce delay-100">.</span>
            </motion.p>

            <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden mb-12 z-10">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>

          <motion.div 
            className="absolute bottom-8 right-8 text-white text-6xl font-light z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 0.4 }}
          >
            {Math.round(progress)}%
          </motion.div>

          <svg className="absolute top-0 w-full h-[calc(100%+300px)] z-0">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#141516"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}