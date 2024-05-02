'use client';

import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import ErrorAnimation from '../public/lottiefiles/error.json';

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
    <div className="text-center h-lvh text-light-text">
      <h2 className="mt-36 text-6xl font-semibold">Oops!</h2>
      <p className="mt-4 text-2xl">Something went wrong!</p>
      <div className="mt-12 mb-12" aria-label='Error page' aria-live='assertive'>
        <Player
        autoplay={true}
        loop={true}
        className="w-[150px] h-[150px] py-2"
        src={ErrorAnimation}
        >
        </Player>
      </div>
      <p className="mb-48 text-xl">
        Please click <a href="#" className="underline decoration-light-link font-semibold" onClick={() => reset()}>here</a> to refresh the Page or
        Contact us at <a href="mailto:info@linkta.org" className="underline decoration-light-link font-semibold">info@linkta.org</a>
      </p>     
    </div>
  );
}