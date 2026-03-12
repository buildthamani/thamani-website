import React from "react";

export function Quote() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center">
      <blockquote className="text-3xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl md:text-wrap">
        <span>&quot;Thamani showed me exactly where my money was going. </span>
        <span className="text-muted-foreground/50">
          I never realized how much I spent on transport until I saw the patterns. Now I spend smarter every week.&quot;
        </span>
      </blockquote>
      <figcaption className="mt-10">
        <span className="block font-semibold tracking-tight md:text-xl">Kevin O.</span>
        <span className="text-muted-foreground mt-1 block text-xs tracking-tighter md:text-xl">
          Thamani User, Nairobi
        </span>
      </figcaption>
    </figure>
  );
}
