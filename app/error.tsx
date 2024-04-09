'use client';

import { useEffect } from "react";
/**
 * Under the hood, error.tsx creates a React Error Boundary that wraps its child segments. The Error component is used as the fallback component, which is rendered if an error is thrown. 
 * For more context on Error Boundary: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Oops! Something went wrong!</h2>
      <button
        onClick={
          // This button triggers the reset function, which will try to re-render the Error Boundary's contents without triggering a full page reload.
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
