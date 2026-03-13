"use client";

import { SectionReveal } from "./section-reveal";

const features = [
  {
    title: "Automatic Parsing",
    description:
      "Every M-PESA message becomes a structured transaction instantly. No manual entry.",
  },
  {
    title: "Smart Categories",
    description:
      "Food, transport, bills — your spending is organized automatically.",
  },
  {
    title: "Spending Trends",
    description:
      "See weekly and monthly patterns at a glance with clear visual breakdowns.",
  },
];

export function ClaritySection() {
  return (
    <section
      id="clarity"
      data-nav-theme="light"
      className="relative bg-[#f9faf9] py-32 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Overline */}
        <SectionReveal>
          <span className="label-overline text-[#727472]">Features</span>
        </SectionReveal>

        {/* Heading */}
        <SectionReveal className="mt-6">
          <h2 className="display-section text-[#0f0f0f]">
            See where your
            <br />
            <span className="text-[#0050FF]">money goes</span>
          </h2>
        </SectionReveal>

        {/* Subtitle */}
        <SectionReveal className="mt-6">
          <p className="body-lg text-[#727472] max-w-lg">
            Thamani reads your M-PESA messages and transforms them into clear,
            categorized insights. No spreadsheets. Just clarity.
          </p>
        </SectionReveal>

        {/* Feature cards — flat white on grey */}
        <SectionReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          staggerDelay={0.1}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white border border-[#ecefec] p-8 flex flex-col gap-4"
            >
              {/* Blue accent dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#0050FF]" />
              <h3 className="text-lg font-bold text-[#0f0f0f] tracking-tight">
                {feature.title}
              </h3>
              <p className="body-md text-[#727472]">{feature.description}</p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
