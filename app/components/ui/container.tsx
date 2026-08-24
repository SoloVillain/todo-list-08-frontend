import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Standard page-width wrapper, matching the cmlabs.co container spec:
 * centered, capped at 1336px, 1rem padding at every breakpoint. Use this
 * at the top of every page section instead of
 * one-off `max-w-*` classes so widths stay consistent.
 */
export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1336px] px-4", className)}
      {...props}
    />
  );
}
