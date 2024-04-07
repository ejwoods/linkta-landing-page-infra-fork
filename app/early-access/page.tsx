'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatusPopup';

export default function PreLaunchSignupFlowContainer() {
  const [showSubmissionStatus, setShowSubmissionStatus] = useState(false);
  const router = useRouter()

  const handleFormSubmit = () => {
    // more form submittion logic will be added here
    // pass event handler to PrelaunchSignUpForm
    setShowSubmissionStatus(true);
  }

  useEffect(() => {
    if (showSubmissionStatus) {
      const timeoutId = setTimeout(() => {
        router.push('/');
      }, 3000);

      // Cleanup timeoutId if component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [showSubmissionStatus]);

  return (
    <main>
      {showSubmissionStatus ? <SubmissionStatus /> : <PrelaunchSignUpForm onSubmit={handleFormSubmit} />}
    </main>
  );
}
