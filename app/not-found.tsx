'use client';

import NotFoundAnimation from '../public/lottiefiles/404.json';
import { Player } from '@lottiefiles/react-lottie-player';

export default function NotFound() {

  return (
    <div className="text-center h-lvh text-light-text">
      <h2 className="mt-36 text-6xl font-semibold">Oops!</h2>
      <p className="mt-4 text-2xl">We couldn&apos;t find the page you&apos;re looking for</p>
      <div className="flex justify-center items-center mt-12 mb-12" aria-label='Page not found' aria-live='assertive'>
        <Player
        autoplay={true}
        loop={false}
        src={NotFoundAnimation}
        className="w-[200px] h-[200px] "
        >
        </Player>
      </div>
      <p className="mb-48 text-xl">
        Please click <a href="#" className="underline decoration-light-link font-semibold">here</a> to refresh the Page or
        Contact us at <a href="mailto:info@linkta.org" className="underline decoration-light-link font-semibold">info@linkta.org</a>
      </p>  
    </div>
  )
};