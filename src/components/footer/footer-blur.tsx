import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function FooterBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 -z-10 h-full w-full mask-t-from-90% overflow-hidden",
        className,
      )}
    >
      <div className="absolute -bottom-[20%] -left-[20%] h-[80%] w-[60%] rounded-full bg-[#0095FE] opacity-[0.12] blur-[120px]" />
      <div className="absolute -bottom-[20%] -right-[20%] h-[80%] w-[60%] rounded-full bg-[#05D3FF] opacity-[0.10] blur-[120px]" />
    </div>
  );
}
