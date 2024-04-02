import LandingPageTreeVisualizationPanel from './components/main-content/LandingPageTreeVisualizationPanel';
import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import WaitingListForm from './components/main-content/WaitingListForm';
import WaitingListResponseToast from './components/main-content/WaitingListResponseToast';
import ShowFormButton from './components/main-content/ShowFormButton';

const Home = () => {
  return (
    <div>
      <h1>Hi there,</h1>
      <WaitingListResponseToast />
      <LandingPageMainHero />
      <LandingPageTreeVisualizationPanel/>
      <ShowFormButton />
      <WaitingListForm />
    </div>
  )
}

export default Home;
