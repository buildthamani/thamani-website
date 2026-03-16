"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const features = [
  {
    title: "Seamless tracking",
    description: "Your finances organized effortlessly — no manual entry, no extra steps.",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h4" />
      </svg>
    ),
  },
  {
    title: "Smart categorization",
    description: "Every shilling finds its place — so you always know where your money went.",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Spending insights",
    description: "See exactly how your money moves — patterns, peaks, and where it all adds up.",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Financial toolkit",
    description: "Budgeting, Statements and so much more — all working together so you stay mindful.",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export function ValueSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const rightY = useTransform(scrollYProgress, [0.2, 0.55], [60, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const leftY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  return (
    <section ref={sectionRef} id="value" data-nav-theme="light" className="relative md:sticky top-0 z-[3] bg-white">
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24 md:min-h-screen md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-20">
          {/* ── Left: Big bold "Build Value." ── */}
          <motion.div className="shrink-0 md:w-[42%] md:pt-2" style={{ y: leftY, opacity: leftOpacity }}>
            <h5 className="leading-[0.9] font-black tracking-[-0.03em] text-[#0f0f0f] select-none">
              <span className="block" style={{ fontSize: "clamp(3.5rem, 3rem + 5vw, 8rem)" }}>
                Build
              </span>
              <span className="block text-[#0050FF]" style={{ fontSize: "clamp(3.5rem, 3rem + 5vw, 8rem)" }}>
                Value.
              </span>
            </h5>
          </motion.div>

          {/* ── Right: Title + Description + 4 Feature Cards ── */}
          <div className="flex flex-1 flex-col">
            {/* Title */}
            <motion.h6
              className="leading-[1.1] font-medium tracking-[-0.02em] text-[#0f0f0f]"
              style={{
                y: rightY,
                opacity: rightOpacity,
                fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)",
              }}
            >
              Crafted for you
            </motion.h6>

            {/* Description */}
            <motion.p
              className="mt-4 max-w-md leading-relaxed font-normal text-[#727472]"
              style={{
                y: rightY,
                opacity: rightOpacity,
                fontSize: "clamp(0.95rem, 0.85rem + 0.35vw, 1.125rem)",
              }}
            >
              Every feature built to make your financial life easy
            </motion.p>

            {/* 4 Feature cards — 2×2 grid */}
            <motion.div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10"
              style={{ y: cardsY, opacity: cardsOpacity }}
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-[16px] border border-[#e8e8e8] bg-[#fafafa] px-5 py-5 transition-colors duration-300 hover:border-[#0050FF]/30 hover:bg-[#0050FF]/[0.03]"
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#0050FF]/10 text-[#0050FF] transition-colors duration-300 group-hover:bg-[#0050FF]/15">
                    {feature.icon}
                  </div>

                  <h6 className="mt-3.5 text-[0.95rem] leading-tight font-semibold text-[#0f0f0f]">{feature.title}</h6>

                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-[#727472]">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
