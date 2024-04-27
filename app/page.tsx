'use client';
import { Suspense, lazy, useEffect, useState } from 'react';
import KeyValueProposition from './components/main-content/KeyValueProposition';
import SubmissionStatus from './components/main-content/SubmissionStatus';
import PrelaunchSignUpForm from './components/main-content/PrelaunchSignUpForm';
import Loading from './loading';

const LandingPageTreeVisualizationPanel = lazy(() => import('./components/main-content/LandingPageTreeVisualizationPanel'));

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSuccessfulSubmit = (): void => setIsSubmitted(true);

  /**
   * useEffect to manage the display of submission status.
   * Sets a timer to reset the submission status after 3 seconds of display.
   */
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;;
    if (isSubmitted) {
      timeoutId = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [isSubmitted]);

  return (
    <>
      <div>
        <KeyValueProposition />
        {isSubmitted ? <SubmissionStatus /> : <PrelaunchSignUpForm handleSuccessfulSubmit={handleSuccessfulSubmit} />}
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <LandingPageTreeVisualizationPanel />
        </Suspense>
      </div>
    </>
  );
}
