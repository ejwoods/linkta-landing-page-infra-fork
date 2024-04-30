'use client';
import { Suspense, lazy, useEffect, useState } from 'react';
import KeyValueProposition from './components/main-content/KeyValueProposition';
import SubmissionStatus from './components/main-content/SubmissionStatus';
import PrelaunchSignUpForm from './components/main-content/PrelaunchSignUpForm';
import Loading from './loading';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';

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
      }, 12000000);
    }

    return () => clearTimeout(timeoutId);
  }, [isSubmitted]);

  return (
    <div className="lg:ml-20">
      <span className="hidden"><LinktaLogoWithText /></span>
      <KeyValueProposition/>
      <div className='flex flex-col sm:flex-row sm:justify-between lg:ml-10'>
        <Suspense fallback={<Loading />}>
          <div className="sm:w-2/3 sm:order-2 z-0">
            <LandingPageTreeVisualizationPanel />
          </div>
        </Suspense>
        <section className="w-full flex flex-col justify-between min-w-[360px] sm:w-1/3 sm:order-1 mt-2 mb-4">
          <article className='max-w-[390px] z-10'>
            {isSubmitted ? <SubmissionStatus /> : <PrelaunchSignUpForm handleSuccessfulSubmit={handleSuccessfulSubmit} />}
          </article>
        </section>
      </div>
    </div>
  );
}
