'use client'
import { useState, useEffect, useReducer } from 'react';
import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatusPopup';

export default function PreLaunchSignupFlowContainer() {
  const [showSubmissionStatus, setShowSubmissionStatus] = useState(false);

  const handleFormSubmit = () => {
    // more form submittion logic will be added here
    // pass event handler to PrelaunchSignUpForm
    setShowSubmissionStatus(true);
  }

  useEffect(() => {
    if (showSubmissionStatus) {
      const timeoutId = setTimeout(() => {
      // add redirect logic
      }, 3000);

      // Cleanup timeoutId if component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [showSubmissionStatus]);

  return (
    <main>
      {!showSubmissionStatus && <PrelaunchSignUpForm onSubmit={handleFormSubmit} />}
      {showSubmissionStatus && <SubmissionStatus />}
    </main>
  );
}
