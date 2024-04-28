import loadingAnimationData from '../public/lottiefiles/loading-linkta.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function Loading() {
  return (
    <div className='mx-auto text-center'>
        <Player
          autoplay
          loop={true}
          src={loadingAnimationData}
          style={{ width: "350px", height: "175px" }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player> 
    </div>
  )
}
