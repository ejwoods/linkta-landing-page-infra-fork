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
    <div className='min-w-[360px] -mt-12 sm:-mt-8 '>
      <div className="hidden sm:block mt-4">
        <Spline aria-label="Interactive 3D model of a tree, which you can rotate and click to explore different functionalities."
        className="w-full " scene="https://prod.spline.design/3EDxf9YSTlnBoD1H/scene.splinecode" />
      </div>
      <div className='sm:hidden'>
        <Spline className='' scene="https://prod.spline.design/n30RNsX1c9-QGXnZ/scene.splinecode" />
      </div>
      <h2 className="block sm:hidden font-serif font-bold text-3xl -mt-24 mb-24 pl-2 text-light-text">Discover the IA of Knowledge with AI</h2>
      <h4 className="block sm:hidden font-sans font-bold text-sm -mt-20 mb-24 pl-2 text-light-text"> Our tool allows you to see the big picture and reveals the connections between ideas, enabling you to focus on what matters most.</h4>
    </div>
  );
}
