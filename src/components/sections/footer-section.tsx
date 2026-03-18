"use client";

import Image from "next/image";
import { motion } from "motion/react";

const footerLinks = {
  App: [
    {
      label: "Download",
      href: "https://play.google.com/store/apps/details?id=org.bizilabs.app.thamani",
    },
    { label: "Features", href: "#clarity" },
  ],
  Company: [
    { label: "Product", href: "https://build.thamani.app/articles/product/introduction" },
    { label: "Engineering", href: "https://build.thamani.app/articles/engineering/init" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "https://build.thamani.app/legal/privacy" },
    { label: "Terms & Conditions", href: "https://build.thamani.app/legal/termsofservice" },
  ],
};

export function FooterSection() {
  return (
    <footer
      id="contact"
      data-nav-theme="light"
      className="relative top-0 z-[6] border-t border-[#ecefec] bg-white md:sticky"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Top row */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image src="/thamani-black.svg" alt="Thamani" width={32} height={32} />
              <span className="text-lg font-bold tracking-tight text-[#0f0f0f]">Thamani</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#727472]">Financial mindfulness .</p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <p className="label-overline text-[#727472]">{category}</p>
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#0f0f0f] transition-colors duration-200 hover:text-[#0050FF]"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          ))}
        </div>

        {/* Large wordmark */}
        <div className="mt-20 mb-8">
          <p className="text-[clamp(3rem,2rem+5vw,8rem)] leading-none font-black tracking-tighter text-[#ecefec] select-none">
            Thamani
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#ecefec] pt-6 sm:flex-row">
          <p className="text-xs text-[#727472]">&copy; {new Date().getFullYear()} Thamani. All rights reserved.</p>
          <p className="text-xs text-[#727472]">Made with intention</p>
        </div>
      </div>
    </footer>
  );
}
