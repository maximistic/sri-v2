import { useEffect, useRef, useState } from "react";

export function useCursorGlow(trackEntireWindow = true) {
  const ref = useRef<HTMLElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const target = trackEntireWindow ? document.body : ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!target) return;
      const rect = target.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    target?.addEventListener("mousemove", handleMouseMove);
    return () => target?.removeEventListener("mousemove", handleMouseMove);
  }, [trackEntireWindow]);

  return {
    ref: trackEntireWindow ? null : ref,
    mousePosition,
    isHovered,
    setIsHovered,
  };
}
