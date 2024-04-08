import LottieSeriesPlayer from "../common/LottieSeriesPlayer";
import addNodeAnimation from "../../../public/lottiefiles/add-node.json";
import deleteNodeAnimation from "../../../public/lottiefiles/delete-node.json";
import editNodeAnimation from "../../../public/lottiefiles/highlight-edit-node.json";
import dragTreeAnimation from "../../../public/lottiefiles/drag-tree.json";
import nodeInputAnimation from "../../../public/lottiefiles/node-input.json";
import treeGenerateAnimation from "../../../public/lottiefiles/tree-generate.json";



export default function LandingPageTreeVisualizationPanel() {
  const treeAnimationData = [
    addNodeAnimation,
    deleteNodeAnimation,
    editNodeAnimation,
    dragTreeAnimation,
    nodeInputAnimation,
    treeGenerateAnimation,
  ]
  return (
    <div>
      <div>
        <LottieSeriesPlayer animationData={treeAnimationData} />
      </div>
      <h2>Make Learning Easier</h2>
      <h4>Organize, structure, and navigate knowledge with the help of AI</h4>
    </div>
  );
}
