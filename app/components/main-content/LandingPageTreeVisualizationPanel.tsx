'use client'
import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';

export default function LandingPageTreeVisualizationPanel() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.style.width = '430px';
        canvas.style.height = '626px';
      }
    }
  }, []);

  return (
    <div className='min-w-[360px] -mt-24 sm:-mt-8 '>
      <div className="hidden sm:block mt-4">
        <Spline aria-label="Interactive 3D model of a tree, which you can rotate and click to explore different functionalities."
        className="w-full " scene="https://prod.spline.design/3EDxf9YSTlnBoD1H/scene.splinecode" />
      </div>
      <div className='sm:hidden'>
        <Spline className='' scene="https://prod.spline.design/n30RNsX1c9-QGXnZ/scene.splinecode" />
      </div>
      <h2 className="block sm:hidden font-serif font-bold text-4xl -mt-36 mb-24 pl-2 text-light-text">Discover the <span className='font-cursive text-4xl -mt-8 inline-block align-baseline mx-2 text-light-accent'> IA </span> of Knowledge with the help of <span className='font-cursive text-4xl inline-block align-baseline ml-2 text-light-border'> AI </span></h2>
      <h4 className="block sm:hidden font-serif font-bold text-xl ml-1 leading-tight -mt-20 mb-24 pl-2 text-light-text"> Our tool allows you to see the big picture and reveals the connections between ideas, enabling you to focus on what matters most.</h4>
    </div>
  );
}
