"use client";

import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.bizilabs.app.thamani";

export function HeroSection() {
  return (
    <section
      data-nav-theme="light"
      className="relative h-screen flex flex-col items-center justify-center bg-white px-6 overflow-hidden"
    >
      {/* Main heading — massive display type */}
      <motion.h1
        className="display-hero text-center select-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="block text-[#0f0f0f]">Build</span>
        <span className="block text-[#0050FF]">Thamani</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="body-lg text-[#727472] text-center mt-6 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        Financial mindfulness for M-PESA
      </motion.p>

      {/* CTA — hero primary. Nav CTA observes this element. */}
      <motion.div
        id="hero-cta"
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <MagneticButton
          as="a"
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#0050FF] px-8 py-4 text-base font-semibold text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.396 12l2.302-2.302zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 3.658z" />
          </svg>
          Download Thamani
        </MagneticButton>
      </motion.div>
    </section>
  );
}
