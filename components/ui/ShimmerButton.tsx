"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
}

export default function ShimmerButton({
  children,
  href,
  onClick,
  variant = "ghost",
}: ShimmerButtonProps) {
  const cls = `group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:-translate-y-0.5"
      : "border border-border text-foreground hover:border-primary hover:text-primary"
  }`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </>
  );

  return href ? (
    <a href={href} className={cls}>{content}</a>
  ) : (
    <button onClick={onClick} className={`cursor-pointer ${cls}`}>{content}</button>
  );
}
