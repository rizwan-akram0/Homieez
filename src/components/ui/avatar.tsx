import * as React from "react";
import { cn } from "../../lib/utils";
import { getInitials } from "../../lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, name, size = "md", ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);

    const sizeClasses = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
      xl: "h-16 w-16 text-lg",
    };

    const handleError = () => {
      setImgError(true);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-medium",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            className="h-full w-full object-cover"
            onError={handleError}
          />
        ) : name ? (
          <span>{getInitials(name)}</span>
        ) : (
          <span>??</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar };