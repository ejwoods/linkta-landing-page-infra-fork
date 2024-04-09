'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatus';
import { createUserDoc } from '../config/firebase';

export type FlowState = 'viewingForm' | 'processing' | 'confirmed';
/**
 * Handles the flow from viewing the signup form, processing the form submission,
 * to confirming submission success, followed by redirection to the homepage after 3 seconds.
 */
export default function PreLaunchSignupFlowContainer() {
  const [flowState, setFlowState] = useState<FlowState>('viewingForm');
  const router = useRouter()

  const handleFormSubmit = () : void => {
    setFlowState('processing');
  // TODO: Expand with form submission logic & refactor setTimeOut placeholder
     setTimeout(() => setFlowState('confirmed'), 1000); // Placeholder for actual
  }
  // Redirects to homepage 3 seconds after confirmation. Prevents leaks by clearing timeout on component unmount or state change.
  useEffect(() => {
    if (flowState !== 'confirmed') return;
    const timeoutId = setTimeout(() => router.push('/'), 3000);
    return () => clearTimeout(timeoutId);
  }, [flowState, router]);

  // TODO: replace loader placeholder with component
  // TODO: pass handleFormSubmit={handleFormSubmit} to PrelaunchSignUpForm
  return (
    <main>
      {flowState === 'viewingForm' && <PrelaunchSignUpForm setFlowState={setFlowState} />}
      {flowState === 'processing' && <div>loader placeholder</div>}
      {flowState === 'confirmed' && <SubmissionStatus />}
    </main>
  );
}
