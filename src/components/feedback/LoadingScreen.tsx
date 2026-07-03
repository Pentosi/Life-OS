import { LoadingSpinner } from "./LoadingSpinner";

export function LoadingScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <LoadingSpinner size="lg" />
    </main>
  );
}