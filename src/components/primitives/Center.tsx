import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CenterProps = HTMLAttributes<HTMLDivElement>;

export function Center({
  className,
  children,
  ...props
}: CenterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}