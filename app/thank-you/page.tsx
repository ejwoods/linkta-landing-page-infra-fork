'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import KeyValueProposition from '../components/main-content/KeyValueProposition';
import { isSignInWithEmailLink } from 'firebase/auth';
import { auth } from '../config/firebase';
import { authenticateAndSaveUserDataFromEmailRedirect } from '../services/emailAuth';
import { useRouter } from 'next/navigation';
import Loading from '../loading';
import ThankYou from '../components/main-content/ThankYou';
import LinktaLogoWithText from '../components/layout/LinktaLogoWithText';

const LandingPageTreeVisualizationPanel = lazy(() => import('../components/main-content/LandingPageTreeVisualizationPanel'));

export default function ThankYouPage() {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      router.push('/');
    } else {
      let email = window.localStorage.getItem('emailForSignIn');
      if (email) {
        authenticateAndSaveUserDataFromEmailRedirect(email);
        setIsLoading(false);
      } else {
        router.push('/');
      }
    }
  }, [router]);

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
      <section className="w-full flex flex-col justify-between min-w-[360px] sm:w-1/3 sm:order-1 mt-2 mb-12 xl:mx-auto">
        <article className='max-w-[430px] z-10 -mt-4'>
         <ThankYou />
        </article>
      </section>
    </div>
  </div>
  );
}
