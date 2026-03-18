"use client";

import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.bizilabs.app.thamani";

export function HeroSection() {
  return (
    <section
      data-nav-theme="light"
      className="relative md:sticky top-0 z-[1] flex h-screen flex-col bg-white"
    >
      {/* Centered hero content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 ">
        {/* Subtitle */}
        <motion.p
          className="mb-6 text-center text-sm font-normal text-black md:text-sm bg-[#EBF4FF] border-2 border-solid border-[#D6E9FF] rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
        
          <div className="py-2 px-6 items-center gap-2 inline-flex">
                  <svg
                   className="inline-flex h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM370.7 389.1L226.4 444.6C207 452.1 187.9 433 195.4 413.6L250.9 269.3C254.2 260.8 260.8 254.2 269.3 250.9L413.6 195.4C433 187.9 452.1 207 444.6 226.4L389.1 370.7C385.9 379.2 379.2 385.8 370.7 389.1zM352 320C352 302.3 337.7 288 320 288C302.3 288 288 302.3 288 320C288 337.7 302.3 352 320 352C337.7 352 352 337.7 352 320z"/></svg>
                      Become Money Mindful
          </div>
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
