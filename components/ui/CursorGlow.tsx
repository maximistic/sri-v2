"use client";

import React from "react";
import { motion } from "framer-motion";

type CursorGlowProps = {
  mousePosition: { x: number; y: number };
  isHovered: boolean;
};

export default function CursorGlow({ mousePosition, isHovered }: CursorGlowProps) {
  return (
    <>
      {/* Glow Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(420px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(18, 160, 75, 0.5), transparent 100%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </>
  );
}
