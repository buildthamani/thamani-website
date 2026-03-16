"use client";

import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.bizilabs.app.thamani";

export function HeroSection() {
  return (
    <section
      data-nav-theme="light"
      className="sticky top-0 z-[1] flex h-screen flex-col bg-white"
    >
      {/* Centered hero content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {/* Subtitle */}
        <motion.p
          className="mb-6 text-center text-lg font-normal text-black md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Become Financially Mindful
        </motion.p>

        {/* Main heading — massive display type */}
        <motion.h1
          className="display-hero text-center select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-[#0f0f0f]">
            Your money is talking.{" "}
            <span className="text-blue-600">Start Listening!</span>
          </span>
        </motion.h1>

        {/* CTA — hero primary. Nav CTA observes this element. */}
        <motion.div
          id="hero-cta"
          className="mt-12 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <MagneticButton
            as="a"
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex animate-bounce items-center justify-center gap-2.5 rounded-full border-2 border-solid border-black bg-[#EFAA43] px-8 py-4 text-base font-semibold text-black"
          >
            <svg
              className="inline-flex h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.396 12l2.302-2.302zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 3.658z" />
            </svg>
            <span className="ml-2">Experience Thamani</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
