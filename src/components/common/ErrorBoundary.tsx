import type { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ErrorFallback";

type ErrorBoundaryProps = {
    children: ReactNode;
};

export default function ErrorBoundary({
    children,
}: ErrorBoundaryProps) {
    return (
        <ReactErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
        </ReactErrorBoundary>
    );
}