'use client';

import NotFoundAnimation from '../public/lottiefiles/404.json';
import { Player } from '@lottiefiles/react-lottie-player';

export default function NotFound() {
  
  return (
    <div>
      <h2 className="mt-12 text-3xl font-semibold">Oops!</h2>
      <p className="mt-4">We couldn&apos;t find the page you&apos;re looking for</p>
      <div aria-label='Page not found' aria-live='assertive'>
        <Player
        autoplay={true}
        loop={false}
        src={NotFoundAnimation}
        className="w-[350px] h-[350px]"
        >
        </Player>
      </div>
      <p className="mb-64 text-light-text">Please <a href="/" className="text-light-text underline hover:via-light-hover">click here</a> to return home or contact us at <a href="mailto:info@linkta.org">info@linkta.org</a></p>
    </div>
  )
};
