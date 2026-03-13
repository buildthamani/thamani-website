"use client";

import { useEffect, useState } from "react";

const words = [
  { text: "Clarity", color: "#99C2FF" },
  { text: "Value", color: "#66A3FF" },
  { text: "Freedom", color: "#3385FF" },
  { text: "Thamani", color: "#0050FF" },
  { text: "Clarity", color: "#99C2FF" },
];

export function AnimatedHeroHeading() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="flex flex-col items-center text-center select-none">
      {/* BUILD — static, white, massive */}
      <h1 className="text-6xl font-black uppercase leading-none tracking-tighter text-white sm:text-8xl md:text-[10rem] lg:text-[12rem]">
        Build
      </h1>

      {/* Cycling word — the wrapper shares the same text-size classes so em units work */}
      <div className="relative overflow-hidden text-6xl font-black uppercase leading-none tracking-tighter sm:text-8xl md:text-[10rem] lg:text-[12rem]"
        style={{ height: "1.15em" }}
      >
        <div
          className={animate ? "animate-word-slide" : ""}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className="block w-full text-center"
              style={{
                color: word.color,
                height: "1.15em",
                lineHeight: "1.15",
              }}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
