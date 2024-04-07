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
    // more form submittion logic will be added here
    // pass event handler to PrelaunchSignUpForm
    setShowSubmissionStatus(true);
  }

  useEffect(() => {
    if (showSubmissionStatus) {
      const timeoutId: NodeJS.Timeout = setTimeout(() => {
        router.push('/');
      }, 3000);

      // Cleanup timeoutId if component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [showSubmissionStatus]);

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
