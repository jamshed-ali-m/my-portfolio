"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Dot follows the pointer exactly (no lag) for pixel-accurate clicking.
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Ring trails slightly behind for a smooth, deliberate feel.
  const ringX = useSpring(dotX, { stiffness: 500, damping: 40, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reducedMotion) return;

    document.documentElement.classList.add("custom-cursor-active");
    setEnabled(true);

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, input, textarea, select, [role='button']"));
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      {/* Center dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-accent-cyan"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
        }}
        animate={{ scale: clicking ? 0.6 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border-2 border-accent-cyan"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 46 : 28,
          height: hovering ? 46 : 28,
          opacity: hovering ? 1 : 0.75,
          scale: clicking ? 0.85 : 1,
          backgroundColor: hovering ? "rgba(34,211,238,0.12)" : "rgba(34,211,238,0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
