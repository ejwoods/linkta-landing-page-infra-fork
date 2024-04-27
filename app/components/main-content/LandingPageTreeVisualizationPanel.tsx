'use client'
import Spline from '@splinetool/react-spline';

export default function LandingPageTreeVisualizationPanel() {
  
  return (
    <div className='-mt-8'>
      <div className="absolute scale-[0.5] sm:scale-[1.25] mt-2 -mr-4">
        <Spline aria-label="Interactive 3D model of a tree, which you can rotate and click to explore different functionalities."
        className="relative" scene="https://prod.spline.design/3EDxf9YSTlnBoD1H/scene.splinecode" />
      </div>
    </div>
  );
}
