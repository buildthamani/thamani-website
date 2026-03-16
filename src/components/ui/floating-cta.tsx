"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.bizilabs.app.thamani";

const COLLAPSE_THRESHOLD = 100;

export function FloatingCTA() {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: ((e.clientX - cx) / (rect.width / 2)) * 8,
      y: ((e.clientY - cy) / (rect.height / 2)) * 8,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCollapsed(y > COLLAPSE_THRESHOLD);
      setVisible(y > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      ref={ref}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove as unknown as React.MouseEventHandler}
      onMouseLeave={handleMouseLeave}
      aria-label="Experience Thamani — Download on Google Play"
      className="fixed bottom-8 right-8 z-[100] inline-flex h-14 items-center rounded-full border-2 border-black bg-[#EFAA43] shadow-lg no-underline overflow-hidden hover:scale-105 active:scale-95"
      style={{
        maxWidth: collapsed ? 56 : 240,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: `translate(${offset.x}px, ${offset.y}px) scale(${visible ? 1 : 0.85})`,
        transition: "max-width 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Always-visible icon */}
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center">
        <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302L15.396 12l2.302-2.302zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 3.658z" />
        </svg>
      </span>

      {/* Collapsible label */}
      <span
        className="overflow-hidden whitespace-nowrap text-sm font-semibold text-black"
        style={{
          display: "inline-block",
          maxWidth: collapsed ? 0 : 160,
          opacity: collapsed ? 0 : 1,
          paddingRight: collapsed ? 0 : 20,
          minWidth: 0,
          transition: "all 300ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        Experience Thamani
      </span>
    </a>
  );
}
