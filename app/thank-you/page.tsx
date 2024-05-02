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
    isLoading ? <Loading /> : <ThankYou />
  );
}
