"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { motion } from "framer-motion";

interface MenuLink {
  path: string;
  label: string;
}

const menuLinks: MenuLink[] = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6 cursor-pointer">
    <motion.div
      className="w-6 h-0.5 bg-emerald-100 mb-2"
      initial={false}
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 4 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.div
      className="w-6 h-0.5 bg-emerald-100"
      initial={false}
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? -4 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </div>
);

const CloseIcon = () => (
  <div className="relative w-6 h-6 cursor-pointer">
    <motion.div
      className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-emerald-100"
      style={{ transformOrigin: "center" }}
      animate={{ rotate: 45, x: "-50%", y: "-50%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-emerald-100"
      style={{ transformOrigin: "center" }}
      animate={{ rotate: -45, x: "-50%", y: "-50%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </div>
);

function SideMenu() {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  // GSAP Animation Setup
  useEffect(() => {
    if (container.current) {
      gsap.set(container.current.querySelectorAll(".menu-link-item-holder"), { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(container.current.querySelector(".menu-overlay"), {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(container.current.querySelectorAll(".menu-link-item-holder"), {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    }
  }, []);

  // Handle Menu Open/Close
  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* Menu Bar (Fixed Header) */}
      <div className="fixed top-0 left-0 w-screen p-4 md:p-8 flex justify-between items-center z-10">
        <div className="menu-logo">
          <Link href="/" className="text-white text-lg md:text-xl font-medium cursor-pointer">
            Sri
          </Link>
        </div>
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
          <HamburgerIcon isOpen={isMenuOpen} />
        </div>
      </div>

      {/* Menu Overlay (Fullscreen) */}
      <div
        className="menu-overlay fixed top-0 left-0 w-screen h-screen p-4 md:p-8 bg-zinc-900 z-20 flex flex-col"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        {/* Menu Overlay Header */}
        <div className="w-full flex justify-between items-center mb-4 md:mb-8">
          <div className="menu-logo">
            <Link href="/" className="text-emerald-100 text-lg md:text-xl font-medium cursor-pointer">
              Sri
            </Link>
          </div>
          <div className="menu-close cursor-pointer text-emerald-100 text-lg md:text-xl" onClick={toggleMenu}>
            <CloseIcon />
          </div>
        </div>

        {/* Menu Links (Centered & Responsive) */}
        <div className="flex-1 flex flex-col justify-center items-center pb-4 md:pb-8">
          <div className="menu-links w-full max-w-6xl mx-auto space-y-4 md:space-y-6 lg:space-y-8 px-4 sm:px-6">
            {menuLinks.map((link, index) => (
              <div
                key={index}
                className="menu-link-item w-auto"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              >
                <div
                  className="menu-link-item-holder relative"
                  onClick={toggleMenu}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="flex items-center w-auto"
                  >
                    {/* Index and Divider Column */}
                    <div className="flex flex-col items-start w-[60%] mr-6">
                      <div className="text-xs md:text-sm text-emerald-100 opacity-80 mb-1">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div
                        className="h-px bg-emerald-300 opacity-30 transition-all duration-300"
                        style={{
                          opacity: hoveredIndex === index ? 0.7 : 0.3,
                          width: "100%",
                        }}
                      />
                    </div>

                    {/* Menu Link */}
                    <div className="flex-1 text-right">
                      <Link
                        href={link.path}
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif transition-all duration-300 ${
                          hoveredIndex === null
                            ? "text-emerald-100 opacity-100"
                            : hoveredIndex === index
                            ? "text-white opacity-100"
                            : "text-emerald-100 opacity-30"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="w-full max-w-4xl mx-auto mb-8 pt-8 md:pt-16 pb-8 md:pb-12 px-4 flex justify-center">
          <div className="flex flex-wrap justify-center space-x-6 sm:space-x-8 text-sm md:text-base text-emerald-100">
            <a href="#" className="hover:text-white transition-colors">X ↗</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn ↗</a>
            <a href="#" className="hover:text-white transition-colors">Behance ↗</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;