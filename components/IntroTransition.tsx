"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroTransition() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setShow(false);
      return;
    }
    const timer = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base-950"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan text-lg font-bold text-white shadow-glow"
          >
            JA
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
