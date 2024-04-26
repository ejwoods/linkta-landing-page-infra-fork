'use client'
import Spline from '@splinetool/react-spline';

export default function LandingPageTreeVisualizationPanel() {
  
  return (
    <div>
      <div className="absolute">
        <Spline aria-label="Interactive 3D model of a tree, which you can rotate and click to explore different functionalities."
        className="relative scale-[1.25]" scene="https://prod.spline.design/igFoxNahg10ecXKH/scene.splinecode" />
      </div>
      <h2 className="font-serif text-lg font-bold py-2">Make Learning Easier</h2>
      <h4 className="text-center">Organize, structure, and navigate knowledge with the help of AI</h4>
    </div>
  );
}
