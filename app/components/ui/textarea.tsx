import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ReactNode, TextareaHTMLAttributes } from "react";

/**
 * Mirrors the real cmlabs.co Textarea — simpler than Input (no endIcon,
 * no size variants, no inputClassName split): className applies directly
 * to the <textarea> itself. Only one size, min-h-[60px] — override via
 * className if you need a taller field.
 */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  leftIcon?: ReactNode;
  withDivider?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, leftIcon, withDivider = false, ...props }, ref) => {
    return (
      <div className="relative">
        {leftIcon && (
          <span className="text-muted absolute top-3 left-3">{leftIcon}</span>
        )}
        {leftIcon && withDivider && (
          <span className="absolute left-11 h-full border-l border-gray-300" />
        )}
        <textarea
          ref={ref}
          className={cn(
            "border-gray-70 flex min-h-[60px] w-full rounded-[4px] border bg-transparent px-3 py-2 text-sm transition-all",
            "placeholder:text-muted focus-visible:ring-primary-30 focus-visible:ring-2 focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            leftIcon && (withDivider ? "!pl-14" : "!pl-12"),
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
