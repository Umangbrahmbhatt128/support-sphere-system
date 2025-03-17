
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function CardHoverEffect({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute -inset-px z-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
