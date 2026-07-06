import type { PropsWithChildren } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "@/features/auth/providers/AuthProvider";
import { queryClient } from "@/lib/react-query";

type AppProvidersProps = PropsWithChildren;

export function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}