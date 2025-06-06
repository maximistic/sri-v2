'use client';

import { syne } from "./fonts";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import Fade from "./components/Fade";

const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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
      <h1 className="text-4xl font-bold mb-6">Text for transition</h1>

      <div className="h-[100vh]"></div>
      <Fade value={para}/>
      <div className="h-[100vh]"></div>
    </div>
  );
}