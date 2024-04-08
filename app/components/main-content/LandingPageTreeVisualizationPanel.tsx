import LottieSeriesPlayer from "../common/LottieSeriesPlayer";

export interface LottieAnimation {
  src: string;
  duration: number;
}

const deleteNodeAnimation: LottieAnimation = {
  src: "https://lottie.host/c26b8196-b715-44fb-a38d-839726da6e19/aqNgCzReE3.json",
  duration: 1000 // duration for delete animation
};

const editNodeAnimation: LottieAnimation = {
  src: "https://lottie.host/4324eb6f-6d19-48ad-ae9b-9d98867b3f50/4xk7Et4guE.json",
  duration: 4000 // duration for edit animation
};

const dragTreeAnimation: LottieAnimation = {
  src: "https://lottie.host/3f2ace73-6ec4-453a-8c1e-1724b8f15366/Iff8gphZBj.json",
  duration: 2000 // duration for drag animation
};

const addNodeAnimation: LottieAnimation = {
  src: "https://lottie.host/804bd6ee-4bab-490f-91ad-7a6c2db81576/e4Oci66fMt.json",
  duration: 3000 // duration for add animation
};

const promptInputAnimation: LottieAnimation = {
  src: "https://lottie.host/baa4c4fa-a563-4acf-ad7c-ac6661ad5afa/N9qEcExdMN.json",
  duration: 2000 // duration for input animation
};

const treeGenerateAnimation: LottieAnimation = {
  src: "https://lottie.host/5bb25d17-ed4f-49c3-894b-22913de3b6fd/Y26mKjkqDS.json",
  duration: 2000 // duration for generate tree animation
};



export default function LandingPageTreeVisualizationPanel() {
  const treeAnimationData: LottieAnimation[] = [
    addNodeAnimation,
    deleteNodeAnimation,
    editNodeAnimation,
    dragTreeAnimation,
    promptInputAnimation,
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
