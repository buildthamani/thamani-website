"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";

const navLinks = [
  { label: "Clarity", href: "#clarity" },
  { label: "Value", href: "#value" },
  { label: "Freedom", href: "#freedom" },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.bizilabs.app.thamani";

export function PersistentNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  // Track which sticky section is visually on top via scroll position.
  // All sticky sections share the same offsetTop and IntersectionObserver
  // reports them all as fully visible, so we compute scroll ranges from
  // DOM order instead — each section "owns" one viewport-height of scroll.
  useEffect(() => {
    const navIds = new Set(navLinks.map((l) => l.href.replace("#", "")));

    const buildRanges = () => {
      const main = document.querySelector("main");
      if (!main) return [];

      const stickySections = Array.from(main.children).filter((el) => {
        const s = window.getComputedStyle(el);
        return s.position === "sticky" && navIds.has(el.id);
      }) as HTMLElement[];

      if (stickySections.length === 0) return [];

      return stickySections.map((el, i) => ({
        id: el.id,
        start: el.offsetTop,
        end: i < stickySections.length - 1
          ? stickySections[i + 1].offsetTop
          : el.offsetTop + window.innerHeight,
      }));
    };

    let ranges = buildRanges();

    const update = () => {
      if (ranges.length === 0) ranges = buildRanges();

      const scrollY = window.scrollY;
      let active: string | null = null;

      for (const r of ranges) {
        if (scrollY >= r.start && scrollY < r.end) active = `#${r.id}`;
      }

      setActiveLink(active);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", () => { ranges = buildRanges(); update(); });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", () => { ranges = buildRanges(); update(); });
    };
  }, []);


  const handleNavClick = useCallback((href: string) => {
    setActiveLink(href);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo + name — LEFT */}
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/thamani-blue.svg"
              alt="Thamani"
              width={32}
              height={32}
            />
            <span className="text-lg font-semibold tracking-tight text-black">
              Thamani
            </span>
          </a>

          {/* Desktop nav pill — CENTER */}
          <div className="hidden md:flex items-center rounded-full bg-[#F5F5F5] p-2 border-2 border-solid border-[#F0F0F0]">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.href;
              return (
                <div key={link.label} className="flex items-center">
                  {i > 0 && (
                    <span
                      className="mx-0.5 h-4 w-px bg-[#d1d6d2]"
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`mx-2 relative px-4 py-2 rounded-full text-xs font-medium tracking-[0.08em] uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "text-black hover:bg-blue-200 hover:text-[#0f0f0f]"
                    }`}
                  >
                    {link.label}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Download button — RIGHT */}
          <div className="hidden md:flex items-center">
            <AnimatePresence>
                <motion.a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EFAA43] hover:text-black"
                  initial={{ opacity: 0, scale: 0.9, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  Download
                </motion.a>
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                className="md:hidden p-2 text-[#0f0f0f]"
                aria-label="Open menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </Dialog.Trigger>

            <AnimatePresence>
              {mobileOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className="fixed inset-0 z-[60] bg-black/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Dialog.Overlay>

                  <Dialog.Content
                    className="fixed top-0 right-0 bottom-0 z-[61] w-[280px]"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                  >
                    <Dialog.Title className="sr-only">
                      Navigation menu
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">
                      Site navigation links and download
                    </Dialog.Description>
                    <motion.div
                      className="h-full w-full bg-white p-8 flex flex-col shadow-xl"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Dialog.Close asChild>
                        <button
                          className="self-end p-2 text-[#0f0f0f]"
                          aria-label="Close menu"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </Dialog.Close>

                      <div className="flex flex-col gap-6 mt-8">
                        {navLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-lg font-semibold text-[#0f0f0f] tracking-tight"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>

                      <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0f0f0f] px-6 py-3.5 text-sm font-semibold text-white"
                      >
                        Experience Thamani
                      </a>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </nav>
    </>
  );
}
