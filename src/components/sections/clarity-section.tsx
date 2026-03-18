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
    <section
      ref={sectionRef}
      id="clarity"
      data-nav-theme="dark"
      className="relative top-0 z-[2] bg-[#0050FF] md:sticky"
    >
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 py-24 md:min-h-screen md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-20">
          {/* ── Left: Big bold "Build Clarity." ── */}
          <motion.div className="shrink-0 md:w-[38%] md:pt-2" style={{ y: leftY, opacity: leftOpacity }}>
            <h5 className="leading-[0.9] font-black tracking-[-0.03em] text-white select-none">
              <span className="block" style={{ fontSize: "clamp(3rem, 2.5rem + 4vw, 6.5rem)" }}>
                Build
              </span>
              <span className="block text-[#0a1628]" style={{ fontSize: "clamp(3rem, 2.5rem + 4vw, 6.5rem)" }}>
                Clarity.
              </span>
            </h5>
          </motion.div>

          {/* ── Right: Title + Description + Cards ── */}
          <div className="flex flex-1 flex-col">
            {/* Title */}
            <motion.h6
              className="leading-[1.1] font-semibold tracking-[-0.02em] text-white"
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
              converts it into clear transactions 󠁯- giving you the structure to make choices with total confidence.
            </motion.p>

            {/* Cards */}
            <motion.div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10"
              style={{ y: cardsY, opacity: cardsOpacity }}
            >
              {/* Card 1: Fully Offline */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#EFAA43] px-6 pt-5 pb-6">
                {/* Large background icon — cloud with slash (offline) */}
                <svg
                  className="absolute -top-2 -right-4 text-[#83530B]/[0.25]"
                  width="140"
                  height="140"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  {/* Slash line to indicate "offline" */}
                  <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                {/* Spacer to push content below the bg icon */}
                <div className="h-20 md:h-24" />

                <h6 className="relative z-10 text-base font-semibold text-[#83530B] md:text-lg">Fully Offline</h6>

                <p className="relative z-10 mt-1.5 text-sm leading-relaxed  text-[#83530B] ">
                  No cloud syncing or uploads
                </p>
              </div>

              {/* Card 2: 100% Private */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#18C994] px-6 pt-5 pb-6">
                {/* Large background icon — shield with lock */}
                <svg
                  className="absolute -top-1 -right-3 text-[#0D6E51]/[0.25]"
                  width="130"
                  height="130"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  {/* Lock keyhole */}
                  <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
                  <rect x="11" y="12" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.5" />
                </svg>

                {/* Spacer to push content below the bg icon */}
                <div className="h-20 md:h-24" />

                <h6 className="relative z-10 text-base font-semibold text-[#0D6E51] md:text-lg">100% Private</h6>

                

                <p className="relative z-10 mt-1.5 text-sm leading-relaxed font-normal text-[#0D6E51]">
                  Everything runs on your device.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
