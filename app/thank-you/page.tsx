'use client';

import React, { useEffect, useState } from 'react';
import { isSignInWithEmailLink } from 'firebase/auth';
import { auth } from '../config/firebase';
import { authenticateAndSaveUserDataFromEmailRedirect } from '../services/emailAuth';
import { useRouter } from 'next/navigation';
import Loading from '../loading';
import ThankYou from '../components/main-content/ThankYou';

export default function ThankYouPage() {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    // check if user is coming from an email auth link
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      router.push('/');
    } else {
      // check local storage for email address
      let email = window.localStorage.getItem('emailForSignIn');
      if (email) {
        // TODO: Should/can this be async to ensure storage before showing thank you page?
        authenticateAndSaveUserDataFromEmailRedirect(email);
        setIsLoading(false);
      } else {
        // error handling should ask alert user that this doesn't look like the
        // device from which they submitted the form. For now, just redirect home.
        router.push('/');
      }
    }
  }, [router]);

  return (
    isLoading ? <Loading /> : <ThankYou />
  );
}
