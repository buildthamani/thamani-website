"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const testimonialsRow1 = [
  { name: "Amina K.", role: "Student", quote: "I finally know where my money goes every month. No more guessing." },
  { name: "Brian O.", role: "Freelancer", quote: "Thamani made budgeting feel natural instead of like a chore." },
  { name: "Faith W.", role: "Small business owner", quote: "The categorization is spot on — I barely touch anything." },
  { name: "Kevin M.", role: "Developer", quote: "Love that nothing leaves my phone. Privacy done right." },
  { name: "Grace N.", role: "Teacher", quote: "My spending habits changed just from seeing the insights." },
  { name: "Dennis L.", role: "Designer", quote: "Simple, clean, and actually useful. Rare combo." },
];

const testimonialsRow2 = [
  { name: "Sarah J.", role: "Marketer", quote: "I recommended this to my whole friend group within a week." },
  { name: "Peter A.", role: "Accountant", quote: "Even as a finance person, the clarity Thamani brings is unmatched." },
  { name: "Lucy M.", role: "Nurse", quote: "No sign-ups, no cloud stuff — just works. That's what I needed." },
  {
    name: "James T.",
    role: "Entrepreneur",
    quote: "It's like having a personal finance assistant that respects your privacy.",
  },
  {
    name: "Mercy W.",
    role: "Content creator",
    quote: "The streaks keep me accountable. I actually look forward to checking.",
  },
  { name: "Hassan R.", role: "Engineer", quote: "Offline-first is the way. Thamani gets it." },
];

function TestimonialCard({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <div className="flex w-[260px] shrink-0 flex-col gap-3 rounded-[14px] border border-white/12 bg-white/8 px-4 py-3.5 backdrop-blur-sm">
      <p className="text-[0.78rem] leading-relaxed text-white/70">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[0.6rem] font-bold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold leading-tight text-white">{name}</p>
          <p className="text-[0.6rem] text-white/45">{role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ testimonials, reverse = false }: { testimonials: typeof testimonialsRow1; reverse?: boolean }) {
  const items = [...testimonials, ...testimonials];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="flex shrink-0"
        style={{
          animation: `${reverse ? "marquee-scroll-reverse" : "marquee-scroll"} 30s linear infinite`,
        }}
      >
        {items.map((t, i) => (
          <div key={`${t.name}-${i}`} className="shrink-0 px-2">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FreedomSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const leftY = useTransform(scrollYProgress, [0.2, 0.55], [60, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const rightY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const marqueeY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);
  const marqueeOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);

  return (
    <section ref={sectionRef} id="freedom" data-nav-theme="dark" className="sticky top-0 z-[4] bg-[#B081EE]">
      {/* Inline keyframes — Tailwind v4 strips them from globals.css */}
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      ` }} />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-20">
          {/* ── Left: Big bold "Build Freedom." ── */}
          <motion.div className="shrink-0 md:w-[38%] md:pt-2" style={{ y: leftY, opacity: leftOpacity }}>
            <h5 className="leading-[0.9] font-black tracking-[-0.03em] text-white select-none">
              <span className="block" style={{ fontSize: "clamp(3rem, 2.5rem + 4vw, 6.5rem)" }}>
                Build
              </span>
              <span className="block text-[#1a0a3e]" style={{ fontSize: "clamp(3rem, 2.5rem + 4vw, 6.5rem)" }}>
                Freedom.
              </span>
            </h5>
          </motion.div>

          {/* ── Right: Title + Description + Testimonial marquee ── */}
          <div className="flex flex-1 flex-col overflow-hidden">
            <motion.h6
              className="leading-[1.1] font-medium tracking-[-0.02em] text-white"
              style={{
                y: rightY,
                opacity: rightOpacity,
                fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)",
              }}
            >
              Live mindful & Enjoy the spending
            </motion.h6>

            <motion.p
              className="mt-4 max-w-md leading-relaxed font-normal text-white/60"
              style={{
                y: rightY,
                opacity: rightOpacity,
                fontSize: "clamp(0.95rem, 0.85rem + 0.35vw, 1.125rem)",
              }}
            >
              We handle the tracking, you handle the living. See your habits clearly, budget effortlessly, and enjoy
              your money without the usual anxiety.
            </motion.p>

            {/* Testimonial marquee — two rows, opposite scroll directions */}
            <motion.div className="mt-8 flex flex-col gap-3 md:mt-10" style={{ y: marqueeY, opacity: marqueeOpacity }}>
              <MarqueeRow testimonials={testimonialsRow1} />
              <MarqueeRow testimonials={testimonialsRow2} reverse />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
