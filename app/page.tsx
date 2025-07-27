'use client';

import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import useLenis from "../hooks/useLenis";
import { usePreloader } from "../hooks/usePreloader";
import ContactSection from "../components/Contact";
import SideMenu from "../components/SideMenu2";
import ExperienceSection from "../components/About";
import HeroSection from "../components/Hero";
import Experience from "@/components/Experience";
import Certificate from "@/components/Certificates";

export default function Home() {
  useLenis();
  
  const { showPreloader, isLoading, isReady } = usePreloader(2500);
  if (!isReady){ return null;} 
  
  return (
    <div className="w-full min-h-screen">
      <AnimatePresence mode="wait">
        {showPreloader && isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <header className="fixed top-6 right-6 z-50">
        <SideMenu />
      </header>
      <HeroSection />
      <Experience />
      <ExperienceSection />
      <Certificate />
      <ContactSection />
    </div>
  );
}