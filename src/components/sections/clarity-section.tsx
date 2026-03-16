"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ClaritySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const leftY = useTransform(scrollYProgress, [0.2, 0.55], [60, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const rightY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  return (
    <section ref={sectionRef} id="clarity" data-nav-theme="dark" className="sticky top-0 z-[2] bg-[#0050FF]">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-20">
          {/* ── Left: Big bold "Build Clarity." ── */}
          <motion.div className="shrink-0 md:w-[42%] md:pt-2" style={{ y: leftY, opacity: leftOpacity }}>
            <h5 className="leading-[0.9] font-black tracking-[-0.03em] text-white select-none">
              <span className="block" style={{ fontSize: "clamp(3.5rem, 3rem + 5vw, 8rem)" }}>
                Build
              </span>
              <span className="block text-[#0a1628]" style={{ fontSize: "clamp(3.5rem, 3rem + 5vw, 8rem)" }}>
                Clarity.
              </span>
            </h5>
          </motion.div>

          {/* ── Right: Title + Description + Cards ── */}
          <div className="flex flex-1 flex-col">
            {/* Title */}
            <motion.h6
              className="leading-[1.1] font-medium tracking-[-0.02em] text-white"
              style={{
                y: rightY,
                opacity: rightOpacity,
                fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)",
              }}
            >
              Turn chaos into chuckles
            </motion.h6>

            {/* Description */}
            <motion.p
              className="mt-4 max-w-md leading-relaxed font-normal text-white/65"
              style={{
                y: rightY,
                opacity: rightOpacity,
                fontSize: "clamp(0.95rem, 0.85rem + 0.35vw, 1.125rem)",
              }}
            >
              Scrolling through your inbox trying to remember where your cash went? Thamani takes that chaos and
              converts it into clear transactions — giving you the structure to make choices with total confidence.
            </motion.p>

            {/* Cards */}
            <motion.div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10"
              style={{ y: cardsY, opacity: cardsOpacity }}
            >
              {/* Card 1: Fully Offline */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#22C55E] px-6 pt-5 pb-6">
                {/* Icon circle */}
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0f0f0f]/15">
                  <svg
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>

                {/* Large ghost number */}
                <span
                  className="block leading-none font-bold tracking-[-0.04em] text-white/20"
                  style={{ fontSize: "clamp(3rem, 2.5rem + 3.5vw, 6rem)" }}
                >
                  50k+
                </span>

                <h6 className="mt-2 text-base font-semibold text-white md:text-lg">Fully offline</h6>

                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  Everything runs on your device. No servers, no internet needed — your data never leaves your phone.
                </p>
              </div>

              {/* Card 2: Data shared */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#F87171] px-6 pt-5 pb-6">
                {/* Icon circle */}
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0f0f0f]/15">
                  <svg
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>

                {/* Large ghost number */}
                <span
                  className="block leading-none font-bold tracking-[-0.04em] text-white/20"
                  style={{ fontSize: "clamp(3rem, 2.5rem + 3.5vw, 6rem)" }}
                >
                  100%
                </span>

                <h6 className="mt-2 text-base font-semibold text-white md:text-lg">Data shared</h6>

                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  No account required. No cloud uploads. Your financial story belongs to you and you alone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
