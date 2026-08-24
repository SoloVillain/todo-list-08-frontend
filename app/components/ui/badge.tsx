import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

/**
 * Mirrors the real cmlabs.co Badge byte-for-byte — same 11 variants and 4
 * sizes, built the same way (`cva`, plain `<div>`, no Radix primitive —
 * this is pure display, nothing interactive). Token substitutions, same
 * spirit as `button.tsx`:
 *  - `default`/`secondary`/`destructive` use this bundle's actual brand
 *    scale (`primary-70`, `gray-70`, `danger-70`) instead of the generic
 *    `bg-primary`/`bg-secondary`/`bg-destructive` theme tokens the source
 *    references, which don't exist in this bundle's token set.
 *  - `focus:ring-ring` becomes `focus:ring-primary-30`, matching every
 *    other focusable control here.
 *  - `greener` on the source is a hardcoded `#62AA7C` that happens to be
 *    byte-identical to the `success-60` brand token already in this
 *    bundle's palette — reproduced here as `bg-success-60` instead of
 *    re-hardcoding a color this project already has a name for.
 *  - `shadow`'s text color (`#666A74`) has no matching token in this
 *    bundle's palette, so it stays a literal arbitrary value, same as the
 *    source.
 */
export const badgeVariants = cva(
  "inline-flex items-center rounded-full text-center transition-colors focus:ring-2 focus:ring-primary-30 focus:ring-offset-2 focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary-70 text-white shadow hover:bg-primary-80",
        secondary: "bg-gray-70 text-dark-70 hover:bg-gray-80",
        destructive: "bg-danger-70 text-white shadow hover:bg-danger-80",
        outline: "text-foreground",
        yellow: "bg-yellow-10 text-yellow-80",
        blue: "bg-primary-10 text-primary-80",
        red: "bg-danger-10 text-danger-80",
        purple: "bg-purple-10 text-purple-80",
        green: "bg-success-10 text-success-80",
        greener: "bg-success-60 text-white",
        dark: "bg-dark-10 text-dark-70",
        gray: "bg-gray-40 text-gray-110",
        shadow:
          "bg-white/20 text-[#666A74] shadow-[0px_2px_6px_-1px_#00000005,0px_4px_12px_-2px_#0000000A]",
      },
      size: {
        default: "px-2 py-0.5 text-xs font-bold",
        sm: "px-3 py-1 text-sm font-bold",
        lg: "px-3 py-2.5 text-sm font-[500]",
        custom: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}
