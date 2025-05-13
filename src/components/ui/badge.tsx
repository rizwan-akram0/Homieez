import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white",
        secondary:
          "bg-secondary-600 text-white",
        success: 
          "bg-success-600 text-white",
        destructive:
          "bg-error-600 text-white",
        outline:
          "text-primary-600 border border-primary-600",
        warning:
          "bg-warning-600 text-white",
        ghost: 
          "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
      },
      size: {
        default: "h-6 text-xs",
        sm: "h-5 text-xs",
        lg: "h-7 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };