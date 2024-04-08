'use client';
//import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useState, useEffect, FC } from 'react';
import { LottieAnimation } from '../../components/main-content/LandingPageTreeVisualizationPanel';


interface LottieSeriesPlayerProps {
    animationData: LottieAnimation[];
  }

const LottieSeriesPlayer: FC<LottieSeriesPlayerProps> = ({animationData}) => {
    const [currentAnimation, setCurrentAnimation] = useState(0);

    useEffect(() => {
        import("@lottiefiles/lottie-player");
        const timer = setTimeout(() => {
            setCurrentAnimation(prevIndex => prevIndex >= animationData.length - 1 ? 0 : prevIndex + 1);
        }, animationData[currentAnimation].duration); 

        return () => clearTimeout(timer);
    }, [currentAnimation, animationData]);

    return (
        <lottie-player
        autoplay
        controls={false}
        loop={false}
        mode="normal"
        src={animationData[currentAnimation].src}
        style={{ width: '320px' }} 
      >
      </lottie-player>
    );
}

export default LottieSeriesPlayer;