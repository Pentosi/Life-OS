import type { FallbackProps } from "react-error-boundary";

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const errorMessage =
    error instanceof Error
      ? error.message
      : "An unexpected error occurred.";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="max-w-lg text-muted-foreground">
        {errorMessage}
      </p>

      <button
        type="button"
        onClick={resetErrorBoundary}
        className="rounded-md border px-4 py-2"
      >
        Try Again
      </button>
    </main>
  );
}