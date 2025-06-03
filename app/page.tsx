'use client';

import { syne } from "./fonts";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";

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

      <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>
      <p className={`text-lg ${syne.className}`}>Trial font usage with Syne</p>
    </div>
  );
}