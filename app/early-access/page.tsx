'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatusPopup';

type FlowState = 'viewingForm' |'processing' | 'confirmed';

export default function PreLaunchSignupFlowContainer() {
  const [flowState, setFlowState] = useState<FlowState>('viewingForm');
  const router = useRouter()

  const handleFormSubmit = () : void => {
    setFlowState('processing');
  // TODO: Expand with form submission logic.
    setFlowState('confirmed');
    scheduleRedirectHome();
  }

  const scheduleRedirectHome = (): void => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (flowState === 'confirmed') {
      timeoutId = setTimeout(scheduleRedirectHome, 3000);
    }
    return () => timeoutId && clearTimeout(timeoutId);
  }, [flowState]);
  // TODO: replace loader placeholder with component
  return (
    <main>
      {flowState === 'viewingForm' && <PrelaunchSignUpForm onSubmit={handleFormSubmit} />}
      {flowState === 'processing' && <div>loader placeholder</div>}
      {flowState === 'confirmed' && <SubmissionStatus />}
    </main>
  );
}
