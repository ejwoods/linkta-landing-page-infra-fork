'use client'
import { useState, useEffect, FC, SetStateAction } from 'react';
import { LottieAnimation } from '../../components/main-content/LandingPageTreeVisualizationPanel';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


interface LottieSeriesPlayerProps {
    animationData: LottieAnimation[];
  }

const LottieSeriesPlayer: FC<LottieSeriesPlayerProps> = ({animationData}) => {
    const [currentAnimation, setCurrentAnimation] = useState(0);
    // const [Player, setPlayer] = useState<any>();
    // const [Controls, setControls] = useState<any>();

    // useEffect(() => {
    // const importLottie = async () => {
    //   const { Player, Controls } = await import('@lottiefiles/react-lottie-player');
    //   setPlayer(() => Player);
    //   setControls(() => Controls);
    // };

//     importLottie();
//   }, []);

    useEffect(() => {

        const timer = setTimeout(() => {
            setCurrentAnimation(prevIndex => prevIndex >= animationData.length - 1 ? 0 : prevIndex + 1);
        }, animationData[currentAnimation].duration); 
        
        return () => clearTimeout(timer);
    }, [currentAnimation, animationData]);

    return (
        <Player
        loop={false}
        src={animationData[currentAnimation].src}
        style={{ width: '320px' }} 
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
}

export default LottieSeriesPlayer;