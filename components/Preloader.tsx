'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code2 } from 'lucide-react';

interface Dimensions {
  width: number;
  height: number;
}

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<Dimensions>({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);

  
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
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Curve animation paths
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  const slideUp = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
    }
  };

  // Content animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-[99] flex items-center justify-center"
    >
      {dimension.width > 0 && (
        <>
          {/* Main Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
            >
              <motion.div
                variants={logoVariants}
                className="p-3 rounded-xl bg-blue-400 text-white"
              >
                <Code2 size={32} />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-3xl font-bold tracking-tight text-white"
              >
                Portfolio
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              variants={itemVariants}
              className="text-blue-200 text-sm tracking-wide uppercase"
            >
              Loading ...
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              variants={itemVariants}
              className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden relative"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-white/20 rounded-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ left: `${progress - 10}%` }}
              />
            </motion.div>

            {/* Progress Percentage */}
            <motion.div
              variants={itemVariants}
              className="text-blue-300 text-xs font-mono"
            >
              {progress}%
            </motion.div>

            {/* Floating Dots */}
            <motion.div
              className="flex space-x-2"
              variants={itemVariants}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Curve Background */}
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