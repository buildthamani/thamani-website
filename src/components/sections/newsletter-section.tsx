"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const faqs = [
  {
    q: "Is my data safe?",
    a: "Absolutely. Thamani processes everything on your device. Your financial data is never uploaded, stored on servers, or shared with anyone — it stays entirely on your phone.",
  },
  {
    q: "Is the app private?",
    a: "Yes, 100%. No account is required, no cloud syncing, and no third-party tracking. We can't see your data even if we wanted to.",
  },
  {
    q: "Can the app work offline?",
    a: "Thamani is built offline-first. Every feature works without an internet connection — your transactions, categories, insights, and budgets are always available.",
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8e8e8]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-[0.9rem] font-semibold text-[#0f0f0f] pr-4">{q}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-[#727472] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
          <p className="pb-4 text-[0.82rem] leading-relaxed text-[#727472]">{a}</p>
        </div>
      </div>
    </div>
  );
}

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
          <motion.div className="shrink-0 md:w-[42%]" style={{ y: leftY, opacity: leftOpacity }}>
            <h5 className="leading-[0.9] font-black tracking-[-0.03em] text-white select-none">
              <span
                className="block"
                style={{ fontSize: "clamp(3.5rem, 3rem + 5vw, 8rem)" }}
              >
                Build
              </span>
              <span
                className="block text-[#0050FF]"
                style={{ fontSize: "clamp(3.5rem, 3rem + 5vw, 8rem)" }}
              >
                Thamani.
              </span>
            </h5>

            <p
              className="mt-6 max-w-sm leading-relaxed font-normal text-white/50"
              style={{ fontSize: "clamp(0.95rem, 0.85rem + 0.35vw, 1.125rem)" }}
            >
              Stay in the loop — get updates on new features, tips for better
              financial habits, and early access to what we&apos;re building next.
            </p>

            {/* Subscribe form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-sm flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#0050FF] focus:bg-white/8"
              />
              <MagneticButton
                as="button"
                type="submit"
                className="shrink-0 rounded-full bg-[#0050FF] px-6 py-3 text-sm font-semibold text-white"
              >
                Subscribe
              </MagneticButton>
            </form>
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
