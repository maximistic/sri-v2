'use client';

import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import useLenis from "../hooks/useLenis";
import ContactSection from "../components/Contact";
import SideMenu from "../components/SideMenu2";
import  ExperienceSection  from "../components/About";
import HeroSection from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Experience from "@/components/Experience";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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
        <SideMenu />
      </header>
      <HeroSection />
      <Experience />
      <ExperienceSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
