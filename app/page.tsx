'use client';

import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero"; 
import useLenis from "./hooks/useLenis";
import ContactSection from "./components/Contact";
import MorphingMenu from "./components/SideMenu";
import SideMenu from "./components/SideMenu2";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];
  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader"/>}
      </AnimatePresence>
      <header className="fixed top-6 right-6 z-50 ">
        <MorphingMenu
          links={navItems}
          overlayBg="bg-neutral-900"
        />
        <SideMenu />
      </header>
      <Hero />

      <ContactSection />
    </div>
  );
}
