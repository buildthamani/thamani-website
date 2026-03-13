"use client";

import { SectionReveal } from "./section-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function NewsletterSection() {
  return (
    <section className="relative bg-white py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Overline */}
        <SectionReveal>
          <span className="label-overline text-[#727472]">Stay Updated</span>
        </SectionReveal>

        {/* Heading */}
        <SectionReveal className="mt-6">
          <h2 className="display-section text-[#0f0f0f]">
            Stay in
            <br />
            the loop
          </h2>
        </SectionReveal>

        {/* Subtitle */}
        <SectionReveal className="mt-6">
          <p className="body-lg text-[#727472] max-w-md">
            Get updates on new features, tips for better financial habits, and
            early access to what we&apos;re building next.
          </p>
        </SectionReveal>

        {/* Email input — ctrl.xyz-style thick border */}
        <SectionReveal className="mt-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-xl"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border-[3px] border-[#0f0f0f] rounded-full px-6 py-4 text-base text-[#0f0f0f] placeholder:text-[#727472] outline-none focus:border-[#0050FF] transition-colors"
            />
            <MagneticButton
              as="button"
              type="submit"
              className="rounded-full bg-[#0050FF] px-8 py-4 text-base font-semibold text-white shrink-0"
            >
              Subscribe
            </MagneticButton>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
