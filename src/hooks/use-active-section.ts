"use client";

import { useEffect, useState } from "react";

export type NavTheme = "light" | "dark";

/**
 * Observes all elements with `data-nav-theme` attribute and returns
 * the theme of whichever section occupies the vertical center of the viewport.
 */
export function useActiveSection(): NavTheme {
  const [theme, setTheme] = useState<NavTheme>("light");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const t = (entry.target as HTMLElement).dataset.navTheme;
            if (t === "light" || t === "dark") {
              setTheme(t);
            }
          }
        }
      },
      {
        // Only trigger when an element crosses the vertical center band
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return theme;
}
