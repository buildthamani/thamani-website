"use client";

import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { motion, useSpring, useTransform } from "motion/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Max translation in px (default 12) */
  strength?: number;
  as?: "button" | "a";
  [key: string]: unknown;
}

/**
 * ctrl.xyz-style magnetic button.
 * On hover-capable devices, the button follows the cursor within its bounds.
 * Includes a background-scale-from-center hover fill.
 */
export function MagneticButton({
  children,
  className = "",
  strength = 12,
  as: Tag = "button",
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  // Spring-animated x/y offsets
  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });

  // Background scale for hover fill
  const scale = useSpring(0, { stiffness: 300, damping: 25 });
  const bgScale = useTransform(scale, [0, 1], [0, 1]);

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * strength;
    const deltaY = ((e.clientY - centerY) / (rect.height / 2)) * strength;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    scale.set(1);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
    scale.set(0);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[Tag] as any;

  return (
    <MotionTag
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* Background fill — scales from center on hover */}
      <motion.span
        className="absolute inset-0 rounded-[inherit] bg-[#0040CC] pointer-events-none"
        style={{
          scale: bgScale,
          opacity: hovered ? 1 : 0,
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </MotionTag>
  );
}
