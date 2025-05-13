import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
        destructive:
          "bg-error-600 text-white hover:bg-error-700 active:bg-error-800",
        outline:
          "border border-neutral-300 bg-transparent hover:bg-neutral-100 text-neutral-900 hover:text-neutral-900 active:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
        secondary:
          "bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800",
        ghost:
          "bg-transparent text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:active:bg-neutral-700",
        link: "text-primary-600 underline-offset-4 hover:underline dark:text-primary-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };