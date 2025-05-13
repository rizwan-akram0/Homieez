import * as React from "react";
import { cn } from "../../lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full appearance-none rounded-md border border-neutral-300 bg-white bg-origin-padding px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus:ring-primary-500 dark:[&>option]:text-neutral-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export { Select };