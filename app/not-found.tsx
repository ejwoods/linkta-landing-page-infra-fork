'use client';

import NotFoundAnimation from '../public/lottiefiles/404.json';
import { Player } from '@lottiefiles/react-lottie-player';

export default function NotFound() {
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-12 text-3xl text-left font-semibold">Oops!</h2>
      <p className="mt-4 text-left">We couldn&apos;t find the page you&apos;re looking for</p>
      <div className="flex justify-center items-center mt-12 mb-12" aria-label='Page not found' aria-live='assertive'>
        <Player
        autoplay={true}
        loop={false}
        src={NotFoundAnimation}
        className="w-[150px] h-[150px]"
        >
        </Player>
      </div>
      <p className="mb-48">Please click <a href="/" className="font-bold hover:text-red-500">here</a> to return home or contact us at <a href="mailto:info@linkta.org" className="underline hover:text-red-500">info@linkta.org</a></p>
    </div>
  )
};