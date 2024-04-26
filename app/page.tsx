'use client';
import { useState } from 'react';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import LandingPageMainHero from './components/main-content/LandingPageMainHero';
import SubmissionStatus from './components/main-content/SubmissionStatus';
import PrelaunchSignUpForm from './components/main-content/PrelaunchSignUpForm';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccessfulSubmit = () => setIsSubmitted(true);

  return (
    <>
      <div className="sm:hidden ml-0">
        <LinktaLogoWithText />
      </div>
      <div>
        <div>
          <>ValueProposition Placeholder</>
          {isSubmitted ? <SubmissionStatus /> : <PrelaunchSignUpForm handleSuccessfulSubmit={handleSuccessfulSubmit} />}
        </div>
            <LandingPageMainHero />
      </div>
    </>
  );
}
