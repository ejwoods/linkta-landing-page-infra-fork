'use client';

import NotFoundAnimation from '../public/lottiefiles/404.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function NotFound() {
  
  return (
    <div className="">
      <h2 className="mb-4 text-3xl font-semibold">Oops!</h2>
      <p className="mb-64">Something went wrong!</p>
      <div className="">
        <Player
        autoplay={true}
        loop={false}
        src={NotFoundAnimation}
        style={{ width: "350px", height: "350px" }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']}/>
        </Player>
      </div>
      <p className="mb-32">Please <a href="/" className="text-light-text underline hover">click here</a> to return home or contact us at info@linkta.org</p>
    </div>
  )
};
