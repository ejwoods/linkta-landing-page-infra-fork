'use client';
import { Suspense, lazy, useState } from 'react';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import SubmissionStatus from './components/main-content/SubmissionStatus';
import PrelaunchSignUpForm from './components/main-content/PrelaunchSignUpForm';
import Loading from './loading';

const LandingPageTreeVisualizationPanel = lazy(() => import('./components/main-content/LandingPageTreeVisualizationPanel'));

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccessfulSubmit = () => setIsSubmitted(true);

  return (
    <>
      <header className="sm:hidden ml-0">
        <LinktaLogoWithText />
      </header>
      <main>
        <div>
          <>ValueProposition Placeholder</>
          {isSubmitted ? <SubmissionStatus /> : <PrelaunchSignUpForm handleSuccessfulSubmit={handleSuccessfulSubmit} />}
        </div>
          <div className="flex flex-col justify-center sm:flex-row-reverse">
            <Suspense fallback={<Loading />}>
              <LandingPageTreeVisualizationPanel />
            </Suspense>
          </div>
      </main>
    </>
  );
}
