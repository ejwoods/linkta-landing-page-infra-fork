'use client';
import { Suspense, lazy, useEffect, useState } from 'react';
import HeadlineProposition from './components/main-content/HeadlineProposition';
import EmailVerificationPrompt from './components/main-content/EmailVerificationPrompt';
import PrelaunchSignUpForm from './components/main-content/PrelaunchSignUpForm';
import Loading from './loading';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import Image from 'next/image';

const LandingPageTreeVisualizationPanel = lazy(() => import('./components/main-content/LandingPageTreeVisualizationPanel'));

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSuccessfulSubmit = (): void => setIsSubmitted(true);

  /**
   * useEffect to manage the display of submission status.
   * Sets a long timer to reset the submission status after to ensure user have enough time to view the submission confirmation.
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
    <div className="contained-div flex flex-col">
      {/* <span className="hidden"><LinktaLogoWithText /></span> */}
      <HeadlineProposition/>
      <div className='linkta-main-content flex flex-col align-items-center md:flex-row px-10 md:justify-around'>
        {/* <Loading /> */}
        <section className="linkta-form text-xl sm:text-lg min-w-9 md:basis-1/2">
          <article className=''>
            {isSubmitted ? <EmailVerificationPrompt /> : <PrelaunchSignUpForm handleSuccessfulSubmit={handleSuccessfulSubmit} />}
          </article>
        </section>
        {/* <Suspense fallback={<Loading />}> */}
          <div className="linkta-image flex self-center md:basis-1/2 mb-8 md:mb-0">
            <Image
              alt="A static image of 3D LinktaFlow, which you would rotate and click to explore different functionalities."
              src="/Linkta-Landing.png"
              width={800}
              height={650}
              // fill={true}
              className="linkta-flow-image scale-70 md:scale-85 lg:scale-100"
              style={{ objectFit: 'contain' }}
            />
          </div>
        {/* </Suspense> */}
      </div>
    </div>
  );
}
