'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [index, setIndex] = useState(0);  
  const words = ["Hello", "Bonjour", "Hola", "Ciao", "こんにちは", "안녕하세요", "Привет"];

  return (
    <motion.div
      initial={{ y : "0" }}
      exit={{ y : "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay:0.2 }}
      className="fixed inset-0 z-[99] bg-black text-white flex items-center justify-center"
    >
      <p className="text-xl">
        Loading rn
      </p>
    </motion.div>
  );
}
