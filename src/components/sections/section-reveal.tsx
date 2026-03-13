"use client";

import { motion, useInView } from "motion/react";
import { useRef, Children, type ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * Wraps each child in a motion.div that fades up with stagger
 * when the container enters the viewport.
 */
export function SectionReveal({
  children,
  className,
  staggerDelay = 0.12,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: index * staggerDelay,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
