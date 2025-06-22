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

function SideMenu2() {
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
          <p className="text-black text-lg md:text-xl">menu</p>
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
            <p>close</p>
          </div>
        </div>

        {/* Menu Links (Big & Spacious) */}
        <div className="flex-1 flex flex-col justify-center pb-4 md:pb-8">
          <div className="menu-links space-y-2 md:space-y-4 lg:space-y-6">
            {menuLinks.map((link, index) => (
              <div
                key={index}
                className="menu-link-item w-full"
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
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4, ease: "easeOut" }}
                    className="flex items-center w-full"
                  >
                    {/* Index (01, 02...) */}
                    <div className="text-xs md:text-sm w-8 md:w-12 text-emerald-100 opacity-80">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Divider Line */}
                    <div className="flex-1 h-px bg-emerald-300 opacity-30 mx-2 md:mx-4 transition-all duration-300"
                      style={{
                        opacity: hoveredIndex === index ? 0.7 : 0.3,
                      }}
                    />

                    {/* Menu Link (Responsive Scaling) */}
                    <Link
                      href={link.path}
                      className={`text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif transition-all duration-300 ${
                        hoveredIndex === null
                          ? "text-emerald-100 opacity-100"
                          : hoveredIndex === index
                          ? "text-white opacity-100"
                          : "text-emerald-100 opacity-30"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer (Social Links & Contact - Now More Compact) */}
        <div className="w-full mt-auto pt-4 md:pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base">
          <div className="flex flex-col space-y-1 md:space-y-2">
            <a href="#" className="text-emerald-100 hover:text-white transition-colors">
              X ↗
            </a>
            <a href="#" className="text-emerald-100 hover:text-white transition-colors">
              LinkedIn ↗
            </a>
            <a href="#" className="text-emerald-100 hover:text-white transition-colors">
              Behance ↗
            </a>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-2">
            <p className="text-emerald-100">srikailaash.pr@gmail.com</p>
            <p className="text-emerald-100">+91 numberpa</p>
            <p className="text-emerald-100">Hyderabad, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu2;