"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.bizilabs.app.thamani";

const faqs = [
  {
    q: "Is my data safe and private?",
    a: "Absolutely. Thamani processes everything on your device. Your financial data is never uploaded, stored on servers, or shared with anyone — it stays entirely on your phone.",
  },
  {
    q: "Can the app work offline?",
    a: "Thamani is built to be offline-first. Some features works without an internet connection — your transactions, categories, insights, and budgets are always available.",
  },
  {
    q: "Is there a free trial?",
    a: "Thamani is free for the first 10 days with full access to all features. After that, a subscription starts at KES 150/month to keep everything running smoothly.",
  },
  {
    q: "Which messages does Thamani support?",
    a: "Thamani currently only supports M-PESA SMS messages automatically.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. You can generate and export financial statements anytime — perfect for personal records or sharing with an accountant.",
  },
];

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const leftY = useTransform(scrollYProgress, [0.2, 0.55], [60, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const rightY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);

  return (
    <section ref={sectionRef} className="relative md:sticky top-0 z-[5] bg-[#0f0f0f]">
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24 md:min-h-screen md:py-28">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-20">
          {/* ── Left: Build Thamani + Description + Subscribe ── */}
          <motion.div className="shrink-0 md:w-[38%]" style={{ y: leftY, opacity: leftOpacity }}>
            <h5 className="leading-[0.9] font-black tracking-[-0.03em] text-white select-none">
              <span
                className="block"
                style={{ fontSize: "clamp(3rem, 2.5rem + 4vw, 6.5rem)" }}
              >
                Build
              </span>
              <span
                className="block text-[#0050FF]"
                style={{ fontSize: "clamp(3rem, 2.5rem + 4vw, 6.5rem)" }}
              >
                Thamani.
              </span>
            </h5>

            <p
              className="mt-6 max-w-sm leading-relaxed font-normal text-white/50"
              style={{ fontSize: "clamp(0.95rem, 0.85rem + 0.35vw, 1.125rem)" }}
            >
              Thamani (swahili for &ldquo;value&rdquo;) is built to 
              make your finances easy, private, and extremely enjoyable.
            </p>

            {/* CTA — hero primary. Nav CTA observes this element. */}
                    <motion.div
                      id="hero-cta"
                      className="mt-4 md:mt-6"
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
          </motion.div>

          {/* ── Right: FAQ ── */}
          <motion.div className="flex flex-1 flex-col" style={{ y: rightY, opacity: rightOpacity }}>
            <h6
              className="leading-[1.1] font-medium tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)" }}
            >
              Frequently asked
            </h6>

            <div className="mt-6 border-t border-[#e8e8e8]/15">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-white/10">
                  <FaqAccordion q={faq.q} a={faq.a} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="pr-4 text-[0.9rem] font-semibold text-white/85">{q}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-[0.82rem] leading-relaxed text-white/45">{a}</p>
        </div>
      </div>
    </>
  );
}
