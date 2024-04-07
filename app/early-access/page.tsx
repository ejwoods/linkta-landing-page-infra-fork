import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatusPopup';

export default function PreLaunchSignupFlowContainer() {
  return (
    <main>
      <PrelaunchSignUpForm />
      <SubmissionStatus />
    </main>
  );
}
