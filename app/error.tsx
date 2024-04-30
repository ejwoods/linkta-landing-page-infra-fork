'use client';

import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

/*
 * Under the hood, error.tsx creates a React Error Boundary that wraps its child segments. The Error component is used as the fallback component, which is rendered if an error is thrown.
 * For more context on Error Boundary: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="mt-8 mb-64 text-3xl font-semibold">Oops! Something went wrong!</h2>
      <div>
        <Player
        autoplay={true}
        loop={false}
        className="w-[350px] h-[350px]"
        >
        </Player>
      </div>
      <p className="mb-16">
        Please <a href="#" onClick={() => reset()}>click here</a> to refresh the page or contact us at <a href="mailto:info@linkta.org">info@linkta.org</a>
      </p>       
    </div>
  );
}
