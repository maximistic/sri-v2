'use client';

import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import useLenis from "../hooks/useLenis";
import { usePreloader } from "../hooks/usePreloader";
import ContactSection from "../components/Contact";
import SideMenu from "../components/SideMenu2";
import ExperienceSection from "../components/About";
import HeroSection from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Experience from "@/components/Experience";

export default function Home() {
  const { showPreloader, isLoading } = usePreloader(2500);
  useLenis();

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
      <Testimonials />
      <ContactSection />
    </div>
  );
}