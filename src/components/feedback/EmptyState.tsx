import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export function EmptyState({
  title,
  description,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      {icon}

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      {description && (
        <p className="max-w-md text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}