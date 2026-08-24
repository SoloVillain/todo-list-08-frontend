"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Mirrors the real cmlabs.co Button byte-for-byte — same 13 variants and
 * 6 sizes, built the same way (cva). Two intentional deviations from the
 * source, both noted in the docs:
 *  - `purple` uses `purple-90`/`purple-100` instead of the source's
 *    `purple-700`/`purple-800`, which isn't a real step on the brand scale
 *    (a bug on the source platform).
 *  - No `asChild` (radix-slot) support — use `LinkButton` below when you
 *    need a link styled as a button instead.
 *
 * Built on framer-motion (whileHover/whileTap) for the press/hover
 * micro-interaction — disabled buttons never animate since
 * `disabled:pointer-events-none` (below) stops the gesture from firing.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:ring-accent/50 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-70 text-white hover:bg-primary-80",
        "dark-primary": "bg-primary-130 text-white hover:bg-primary-110",
        destructive: "bg-danger-70 text-white hover:bg-danger-80",
        outline:
          "border border-primary-70 bg-transparent text-primary-70 hover:bg-primary-70 hover:text-white",
        "outline-secondary":
          "border border-dark-30 bg-transparent text-dark-30 hover:bg-dark-30 hover:text-white",
        secondary: "bg-gray-70 text-dark-70 hover:bg-gray-80",
        purple: "bg-purple-90 text-white hover:bg-purple-100",
        dark: "bg-dark-130 text-white hover:bg-dark-120",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link: "bg-transparent text-accent underline-offset-4 hover:underline",
        rounded:
          "h-fit rounded-full bg-primary-70 py-4 text-white hover:bg-primary-80",
        roundedOutline:
          "h-fit rounded-full border border-primary-70 bg-transparent py-4 text-primary-70 hover:bg-primary-70 hover:text-white",
        white: "bg-white text-dark-70",
      },
      size: {
        lg: "px-7 py-[14px]",
        md: "px-6 py-3",
        default: "px-5 py-3",
        sm: "px-[14px] py-[6px] text-sm",
        xs: "px-2 py-1 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonVariantProps & HTMLMotionProps<"button">;

const TAP_TRANSITION = { duration: 0.15, ease: "easeOut" as const };

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={TAP_TRANSITION}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

const MotionLink = motion.create(Link);

export function LinkButton({
  href,
  variant,
  size,
  className,
  children,
}: ButtonVariantProps & {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <MotionLink
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={TAP_TRANSITION}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </MotionLink>
  );
}
