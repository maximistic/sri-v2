"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

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
  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {/* Menu Bar */}
      <div className="fixed top-0 left-0 w-screen p-8 flex justify-between items-center z-10">
        <div className="menu-logo">
          <Link href="/" className="text-white cursor-pointer">
            Sri
          </Link>
        </div>
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
          <p className="text-black">menu</p>
        </div>
      </div>

      {/* Menu Overlay */}
      <div className="menu-overlay fixed top-0 left-0 w-screen h-screen p-8 bg-[#c5fb45] z-20 flex" 
           style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}>
        
        {/* Menu Overlay Bar */}
        <div className="fixed top-0 left-0 w-screen p-8 flex justify-between items-center z-30">
          <div className="menu-logo">
            <Link href="/" className="text-black cursor-pointer">
              Sri
            </Link>
          </div>
          <div className="menu-close cursor-pointer text-black" onClick={toggleMenu}>
            <p>close</p>
          </div>
        </div>

        {/* Menu Close Icon */}
        <div className="flex-[2] flex items-end cursor-pointer">
          <p className="text-[100px] leading-[70%]" 
             style={{ WebkitTextStroke: "5px #c5fb45" }}>
            &#x2715;
          </p>
        </div>

        {/* Menu Copy */}
        <div className="flex-[4] flex flex-col justify-between pt-8">
          <div className="menu-links">
            {menuLinks.map((link: MenuLink, index: number) => (
              <div className="menu-link-item w-max" 
                   key={index}
                   style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
                <div className="menu-link-item-holder relative" onClick={toggleMenu}>
                  <Link 
                    href={link.path} 
                    className="text-black text-[80px] font-normal tracking-[-0.02em] leading-[85%] block"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info flex mt-8">
            <div className="flex-1 flex flex-col justify-end">
              <a href="#" className="text-black mb-2">X &#8599;</a>
              <a href="#" className="text-black mb-2">Instagram &#8599;</a>
              <a href="#" className="text-black mb-2">LinkedIn &#8599;</a>
              <a href="#" className="text-black mb-2">Behance &#8599;</a>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <p className="text-black mb-2">srikailaash.pr@gmail.com</p>
              <p className="text-black mb-2">+91 numberpa</p>
              <p className="text-black mb-2">Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="flex-[4] flex justify-end items-end">
          <p className="text-black">view Showreel</p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu2;