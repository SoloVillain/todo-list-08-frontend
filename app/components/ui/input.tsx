import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

type InputSize = "default" | "sm" | "xs" | "md";

/**
 * Mirrors the real cmlabs.co Input byte-for-byte where practical — same
 * radius (4px, smaller than Card/Button's), border, and focus ring. Two
 * intentional deviations, both noted inline:
 *  - No `withCountryCode` — the source builds that with an internal Select
 *    component this bundle doesn't ship. Add your own Select and wire it
 *    up the same way if you need it.
 *  - No built-in error/invalid state — the source doesn't have one either;
 *    it delegates to a `FormMessage`-style component next to the field.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  endIcon?: ReactNode;
  variantSize?: InputSize;
  withDivider?: boolean;
  inputClassName?: string;
}

const sizeStyles: Record<InputSize, string> = {
  md: "px-5 py-3",
  default: "px-5 py-2 text-[18px] leading-[24px]",
  sm: "px-3 py-2.5 text-base leading-[20px]",
  xs: "px-3 py-2.5 text-sm leading-4",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      leftIcon,
      endIcon,
      withDivider = false,
      variantSize = "default",
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)}>
        {leftIcon && (
          <span className="text-muted absolute top-1/2 left-3 -translate-y-1/2">
            {leftIcon}
          </span>
        )}
        {leftIcon && withDivider && (
          <span className="absolute left-11 h-full border-l border-gray-300" />
        )}
        <input
          ref={ref}
          className={cn(
            "border-gray-70 text-dark-70 w-full rounded-[4px] border bg-transparent ring-0 transition-all",
            "file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted focus-visible:ring-primary-30 focus-visible:ring-2 focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            sizeStyles[variantSize],
            leftIcon && (withDivider ? "!pl-14" : "!pl-8"),
            endIcon && "!pr-12",
            inputClassName,
          )}
          {...props}
        />
        {endIcon && (
          <span className="text-muted absolute top-1/2 right-2 -translate-y-1/2">
            {endIcon}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
