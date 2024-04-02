import LandingPageTreeVisualizationPanel from './components/main-content/LandingPageTreeVisualizationPanel';
import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import WaitingListForm from './components/main-content/PrelaunchSignUpForm';
import WaitingListResponseToast from './components/main-content/SubmissionStatusPopup';
import ShowFormButton from './components/main-content/VisualizationTriggerButton';

export default function Home () {
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
