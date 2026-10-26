'use client';

import Preloader from "../components/Preloader";
import { AnimatePresence, MotionConfig } from "framer-motion";
import useLenis from "../hooks/useLenis";
import { usePreloader } from "../hooks/usePreloader";
import ContactSection from "../components/Contact";
import SideMenu from "../components/SideMenu2";
import Projects from "@/components/Projects";
import HeroSection from "../components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificate from "@/components/Certificates";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  useLenis();

  const { showPreloader, isLoading, isReady } = usePreloader(1700);

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full min-h-screen">
        <AnimatePresence mode="wait">
          {showPreloader && isLoading && <Preloader key="preloader" />}
        </AnimatePresence>
        <Cursor />
        <ScrollProgress className="pointer-events-none fixed left-0 top-0 z-10 h-screen w-[3px] bg-primary" />
        <div className="fixed z-50">
          <SideMenu />
        </div>
        <main>
          <HeroSection ready={isReady && !isLoading} />
          <Skills />
          <Experience />
          <Projects />
          <Certificate />
        </main>
        <ContactSection />
      </div>
    </MotionConfig>
  );
}
