import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement>;

export default function Section({
    className,
    children,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "py-8 md:py-12",
                className,
            )}
            {...props}
        >
            {children}
        </section>
    );
}