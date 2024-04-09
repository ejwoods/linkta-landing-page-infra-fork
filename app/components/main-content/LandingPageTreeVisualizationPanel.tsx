'use client'
//import LottieSeriesPlayer from "../common/LottieSeriesPlayer";
import deleteNodeAnimationData from "../../../public/lottiefiles/delete-node.json";
import editNodeAnimationData from "../../../public/lottiefiles/edit-node.json";
import dragTreeAnimationData from "../../../public/lottiefiles/drag-tree.json";
import addNodeAnimationData from "../../../public/lottiefiles/add-node.json";
import promptInputAnimationData from "../../../public/lottiefiles/prompt-input.json";
import treeGenerateAnimationData from "../../../public/lottiefiles/tree-generate.json";
import dynamic from 'next/dynamic';

export interface LottieAnimation {
  src: object;
  duration: number;
}

const editNodeAnimation: LottieAnimation = {
  src: editNodeAnimationData,
  duration: 3800
};

const dragTreeAnimation: LottieAnimation = {
  src: dragTreeAnimationData,
  duration: 1800
};

const addNodeAnimation: LottieAnimation = {
  src: addNodeAnimationData,
  duration: 2900
};

const promptInputAnimation: LottieAnimation = {
  src: promptInputAnimationData,
  duration: 2000
};

const treeGenerateAnimation: LottieAnimation = {
  src: treeGenerateAnimationData,
  duration: 2000
};

const deleteNodeAnimation: LottieAnimation = {
  src: deleteNodeAnimationData,
  duration: 800 
};


export default function LandingPageTreeVisualizationPanel() {
  const treeAnimationData: LottieAnimation[] = [
    promptInputAnimation,
    treeGenerateAnimation,
    dragTreeAnimation,
    editNodeAnimation,
    deleteNodeAnimation,
    addNodeAnimation,
  ]
  const LottieSeriesPlayer = dynamic(() => import('../common/LottieSeriesPlayer'));
  
  return (
    <div>
      <div style={{ width: '320px', height: '360px' }}>
        <LottieSeriesPlayer animationData={treeAnimationData}/>
      </div>
      <h2>Make Learning Easier</h2>
      <h4>Organize, structure, and navigate knowledge with the help of AI</h4>
    </div>
  );
}
