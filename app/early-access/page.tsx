'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatusPopup';

type FlowState = 'form' | 'submissionStatus';

export default function PreLaunchSignupFlowContainer() {
  const [flowState, setFlowState] = useState<FlowState>('form');
  const router = useRouter()

  const handleFormSubmit = () : void => {
  // TODO: Expand with form submission logic.
    setFlowState('submissionStatus');
    scheduleRedirectHome();
  }

  const scheduleRedirectHome = (): void => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (flowState === 'submissionStatus') {
      timeoutId = setTimeout(scheduleRedirectHome, 3000);
    }
    return () => timeoutId && clearTimeout(timeoutId);
  }, [flowState]);

  return (
    <main>
      {flowState === 'form' ? (
        <PrelaunchSignUpForm onSubmit={handleFormSubmit} />
      ) : (
        <SubmissionStatus />
      )}
    </main>
  );
}
