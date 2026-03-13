"use client";

import { SectionReveal } from "./section-reveal";

const metrics = [
  {
    value: "47",
    label: "Transactions parsed",
    description: "Every M-PESA message tracked automatically this month",
  },
  {
    value: "12",
    label: "Day streak",
    description: "Consecutive days of mindful spending awareness",
  },
  {
    value: "18%",
    label: "Saved vs last month",
    description: "Your spending habits improving through awareness",
  },
];

export function ValueSection() {
  return (
    <section
      id="value"
      data-nav-theme="light"
      className="relative bg-white py-32 md:py-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Overline */}
        <SectionReveal>
          <span className="label-overline text-[#0050FF]">
            Understand Value
          </span>
        </SectionReveal>

        {/* Heading */}
        <SectionReveal className="mt-6">
          <h2 className="display-section text-[#0f0f0f]">
            Know the weight
            <br />
            of every shilling
          </h2>
        </SectionReveal>

        {/* Subtitle */}
        <SectionReveal className="mt-6">
          <p className="body-lg text-[#727472] max-w-lg">
            Build streaks, set intentions, and watch your mindful money habits
            grow. Every transaction becomes a moment of awareness.
          </p>
        </SectionReveal>

        {/* Metric cards — typography IS the visual */}
        <SectionReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          staggerDelay={0.1}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-t-2 border-[#0f0f0f] pt-8 pb-4"
            >
              <p className="display-metric text-[#0f0f0f]">{metric.value}</p>
              <p className="text-sm font-bold text-[#0f0f0f] tracking-tight mt-3">
                {metric.label}
              </p>
              <p className="body-md text-[#727472] mt-2">
                {metric.description}
              </p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
