//import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useState, useEffect, useRef, FC } from 'react';
import { LottieAnimation } from '../../components/main-content/LandingPageTreeVisualizationPanel';


interface LottieSeriesPlayerProps {
    animationData: LottieAnimation[];
  }

const LottieSeriesPlayer: FC<LottieSeriesPlayerProps> = ({animationData}) => {
    const [currentAnimation, setCurrentAnimation] = useState(0);
    const ref = useRef<any>(null)

    useEffect(() => {
        const playAnimation = async () => {
            const { default: LottiePlayer } = await import("@lottiefiles/lottie-player");
            if (ref.current) {
              ref.current.load(animationData[currentAnimation].src);
            }
          };
      
          playAnimation();
        const timer = setTimeout(() => {
            setCurrentAnimation(prevIndex => prevIndex >= animationData.length - 1 ? 0 : prevIndex + 1);
        }, animationData[currentAnimation].duration); 

        return () => clearTimeout(timer);
    }, [currentAnimation, animationData]);

    return (
        <lottie-player
        autoplay
        ref={ref}
        loop={false}
        mode="normal"
        src={animationData[currentAnimation].src}
        style={{ width: '320px' }} 
      >
      </lottie-player>
    );
}

export default LottieSeriesPlayer;