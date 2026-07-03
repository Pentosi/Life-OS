import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type PageProps = HTMLAttributes<HTMLElement>;

export function Page({
  className,
  children,
  ...props
}: PageProps) {
  return (
    <main
      className={cn(
        "min-h-screen bg-background text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}