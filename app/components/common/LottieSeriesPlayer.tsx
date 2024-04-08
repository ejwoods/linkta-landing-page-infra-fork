'use client';
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useState, useEffect } from 'react';

const LottieSeriesPlayer = ({ animationData}) => {
    const [currentAnimation, setCurrentAnimation] = useState(animationData[0]);

    useEffect(() => {
    if (currentAnimation < animationData.length - 1) {
        const timer = setTimeout(() => {
        setCurrentAnimation(currentAnimation + 1);
        }, animationData[currentAnimation].duration); 

        return () => clearTimeout(timer);
    }
    }, [currentAnimation, animationData]);

    return (
        <lottie-player
        autoplay
        controls
        loop={false}
        mode="normal"
        src={animationData[currentAnimation].src}
        style="width: 320px"
      >

      </lottie-player>
    );
}

export default LottieSeriesPlayer;