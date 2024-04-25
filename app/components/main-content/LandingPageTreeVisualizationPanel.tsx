'use client'
import Spline from '@splinetool/react-spline';

export default function LandingPageTreeVisualizationPanel() {
  
  return (
    <div>
      <div className="absolute">
      <Spline className="relative scale-[1.75]" scene="https://prod.spline.design/o3aArfp9O67BHMQ2/scene.splinecode" />
      </div>
      <h2 className="font-serif text-lg font-bold py-2">Make Learning Easier</h2>
      <h4 className="text-center">Organize, structure, and navigate knowledge with the help of AI</h4>
    </div>
  );
}
