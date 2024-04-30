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
        className="lg:w-full sm:scale-[0.75] lg:scale-[1]" scene="https://prod.spline.design/3EDxf9YSTlnBoD1H/scene.splinecode" />
      </div>
      <div className='sm:hidden'>
        <Spline className='' scene="https://prod.spline.design/n30RNsX1c9-QGXnZ/scene.splinecode" />
      </div>
      <section>
      <h2 className="block sm:hidden font-serif font-bold text-3xl -mt-36 mb-24 pl-2 text-light-text">Discover the Structure of Knowledge with the help of AI</h2>
      <section className="block sm:hidden font-sans font-semibold text-base ml-1 leading-tight -mt-20 mb-24 pl-2">
      <h4 className="text-light-text">
        Linkta makes learning easier by uncovering the hidden relationships between concepts.
      </h4>
      <h4 className="text-light-text">
        Our tool allows you to see the big picture and reveals the connections between ideas, enabling you to focus on what matters most.
      </h4>
    </section>
      </section>
      <section className="block sm:hidden mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-bounce mx-auto w-12 h-12 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </section>

    </div>
  );
}

