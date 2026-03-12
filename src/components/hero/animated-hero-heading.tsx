"use client";

import { useEffect, useState } from "react";

const words = [
  { text: "Clarity", color: "#EFAA43" },
  { text: "Value", color: "#B081EE" },
  { text: "Freedom", color: "#18C994" },
  { text: "Thamani", color: "#0075F2" },
  { text: "Clarity", color: "#EFAA43" },
];

export function AnimatedHeroHeading() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <h1 className="text-center text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
      <span className="flex flex-wrap items-center justify-center gap-x-[0.2em]">
        <span>Build</span>
        <span
          className="relative inline-block overflow-hidden"
          style={{ height: "1.15em" }}
        >
          <span
            className={animate ? "animate-word-slide" : ""}
            style={{
              display: "flex",
              flexDirection: "column",
              transition: "none",
            }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                className="block w-full text-left"
                style={{
                  color: word.color,
                  height: "1.15em",
                  lineHeight: "1.15",
                }}
              >
                {word.text}
              </span>
            ))}
          </span>
        </span>
      </span>
    </h1>
  );
}
