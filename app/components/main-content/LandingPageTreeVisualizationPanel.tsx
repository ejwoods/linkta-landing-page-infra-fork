'use client'
import Spline from '@splinetool/react-spline';

export default function LandingPageTreeVisualizationPanel() {

  return (
    <div className='min-w-[390px] -mt-24 sm:-mt-8'>
      <div className="sm:relative scale-[0.6] -ml-60 -my-24 sm:scale-[1] sm:mt-40 lg:mt-0 lg:scale-[1.4] xl:scale-[1.5] xl:-mr-20 mt-2">
        <Spline aria-label="Interactive 3D model of a tree, which you can rotate and click to explore different functionalities."
        className="block sm:absolute sm:ml-12 lg:ml-24 xl:ml-36 xl:mt-12" scene="https://prod.spline.design/3EDxf9YSTlnBoD1H/scene.splinecode" />
      </div>
    </div>
  );
}
