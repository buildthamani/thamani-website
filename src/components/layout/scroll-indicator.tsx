"use client";

import { motion, useScroll } from "motion/react";

/**
 * Fixed right-edge scroll progress bar.
 * Thin blue fill tracks scroll progress — ctrl.xyz style.
 */
export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 right-0 z-[100] w-[3px] h-screen pointer-events-none">
      <motion.div
        className="w-full h-full bg-blue-600 origin-top"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
}
