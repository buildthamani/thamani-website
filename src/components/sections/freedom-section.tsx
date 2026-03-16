"use client";

import { SectionReveal } from "./section-reveal";

const privacyFeatures = [
  "100% on-device processing — nothing leaves your phone",
  "No account required — your data is never tied to a server",
  "Open and transparent — you control what gets analyzed",
];

export function FreedomSection() {
  return (
    <section
      id="freedom"
      data-nav-theme="light"
      className="sticky top-0 z-[4] bg-[#ecefec] py-32 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Overline */}
        <SectionReveal>
          <span className="label-overline text-[#727472]">
            Privacy First
          </span>
        </SectionReveal>

        {/* Heading */}
        <SectionReveal className="mt-6">
          <h2 className="display-section text-[#0f0f0f]">
            Your data stays
            <br />
            <span className="text-[#0050FF]">yours. Always.</span>
          </h2>
        </SectionReveal>

        {/* Subtitle */}
        <SectionReveal className="mt-6">
          <p className="body-lg text-[#727472] max-w-lg">
            Thamani processes everything on your device. No cloud uploads, no
            third-party access. Your financial story belongs to you alone.
          </p>
        </SectionReveal>

        {/* Privacy features — clean text list with blue dots */}
        <SectionReveal className="mt-12 flex flex-col gap-5" staggerDelay={0.1}>
          {privacyFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#0050FF] shrink-0" />
              <p className="body-md text-[#0f0f0f]">{feature}</p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
