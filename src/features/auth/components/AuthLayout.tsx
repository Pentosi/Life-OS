import type { PropsWithChildren } from "react";

type AuthLayoutProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            Life OS
          </h1>

          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          <p className="text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          {children}
        </div>
      </div>
    </main>
  );
}