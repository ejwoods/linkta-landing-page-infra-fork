'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatusPopup';

type FlowState = 'viewingForm' |'processing' | 'confirmed';
/**
 * Handles the flow from viewing the signup form, processing the form submission,
 * to confirming submission success, followed by redirection to the homepage.
 */
export default function PreLaunchSignupFlowContainer() {
  const [flowState, setFlowState] = useState<FlowState>('viewingForm');
  const router = useRouter()

  const handleFormSubmit = () : void => {
    setFlowState('processing');
  // TODO: Expand with form submission logic & refactor setTimeOut placeholder
     setTimeout(() => setFlowState('confirmed'), 1000); // Placeholder for actual
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (flowState === 'confirmed') {
      timeoutId = setTimeout( () => router.push('/'), 3000);
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
