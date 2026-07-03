import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  cols?: 1 | 2 | 3 | 4;
};

const colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function Grid({
  cols = 1,
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        colsClasses[cols],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}