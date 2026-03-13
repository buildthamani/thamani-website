"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const CLICKABLE_SELECTOR =
  'a, button, [role="button"], input[type="submit"], input[type="button"], [data-clickable], label[for], select, textarea, input';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const checkClickable = useCallback((target: EventTarget | null) => {
    if (!target || !(target instanceof HTMLElement)) return false;
    return !!target.closest(CLICKABLE_SELECTOR);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    if (!mq.matches) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onMove = (e: MouseEvent) => {
      wrapper.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (!visible) setVisible(true);
      setHovering(checkClickable(e.target));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.documentElement.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible, checkClickable]);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      {/* Inner dot — scales & pulses independently of position */}
      <div
        className={`rounded-full bg-[#0f0f0f] ${hovering ? "cursor-dot-hover" : ""}`}
        style={{
          width: hovering ? 40 : 8,
          height: hovering ? 40 : 8,
          marginLeft: hovering ? -20 : -4,
          marginTop: hovering ? -20 : -4,
          transition:
            "width 0.3s cubic-bezier(0.22,1,0.36,1), height 0.3s cubic-bezier(0.22,1,0.36,1), margin 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  );
}
