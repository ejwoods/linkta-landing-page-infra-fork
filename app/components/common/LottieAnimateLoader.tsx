'use client'

import loader from '../../../public/lottiefiles/loader.json';
import { Player } from '@lottiefiles/react-lottie-player';

export default function LottieAnimateLoader() {
  return (
    <div aria-label='Loading content' aria-live='assertive' className="mx-auto text-center my-auto">
      <Player
        autoplay
        loop
        src={loader}
        className="w-[100px] h-[100px]"
      >
      </Player>
    </div>
  );
}
