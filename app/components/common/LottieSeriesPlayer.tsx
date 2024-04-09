'use client'
import { useState, useEffect,  FC } from 'react';
import { LottieAnimation } from '../../components/main-content/LandingPageTreeVisualizationPanel';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


interface LottieSeriesPlayerProps {
    animationData: LottieAnimation[];
  }

const LottieSeriesPlayer: FC<LottieSeriesPlayerProps> = ({animationData}) => {
    const [currentAnimation, setCurrentAnimation] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentAnimation(prevIndex => prevIndex >= animationData.length - 1 ? 0 : prevIndex + 1);
        }, animationData[currentAnimation].duration); 

        return () => clearTimeout(timer);
    }, [currentAnimation, animationData]);

    return (
        <Player
        autoplay
        loop={false}
        src={animationData[currentAnimation].src}
        style={{ width: '320px' }} 
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
}

export default LottieSeriesPlayer;