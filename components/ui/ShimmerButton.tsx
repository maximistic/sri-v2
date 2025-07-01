"use client";
import React from "react";

interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function ShimmerButton({
  children,
  href,
  onClick,
}: ShimmerButtonProps) {
  
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/0 via-zinc-700/20 to-zinc-800/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </>
  );

  if (href) {
    return (
      <a href={href} className="group relative inline-block border border-zinc-700 px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/50 hover:-translate-y-0.5 backdrop-blur-sm overflow-hidden">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="group relative inline-block border border-zinc-700 px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900/50 hover:-translate-y-0.5 backdrop-blur-sm overflow-hidden">
      {content}
    </button>
  );
}