'use client';

import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 3000);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
    </div>
  );
}
