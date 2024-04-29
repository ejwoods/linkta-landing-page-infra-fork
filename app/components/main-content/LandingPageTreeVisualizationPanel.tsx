'use client'
import Spline from '@splinetool/react-spline';

export default function LandingPageTreeVisualizationPanel() {

  return (
    <div className='min-w-[360px] -mt-24 sm:-mt-8 '>
      <div className="sm:relative  mt-4">
        <Spline aria-label="Interactive 3D model of a tree, which you can rotate and click to explore different functionalities."
        className="" scene="https://prod.spline.design/3EDxf9YSTlnBoD1H/scene.splinecode" />
      </div>
    </div>
  );
}
