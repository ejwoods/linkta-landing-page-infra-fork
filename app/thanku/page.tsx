'use client'

import React, { useEffect } from 'react'
import { signOut, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, sendEmailLink } from '@/app/config/firebase';
import { useRouter } from 'next/navigation';
export default function ThankYou() {

  const router = useRouter();
  useEffect(() => {
    console.log('in useEffect');
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        router.push('/early-access');
      } else {
        signInWithEmailLink(auth, email, window.location.href).then(
          async (result) => {
            //create user doc in DB
            console.log('user:', result.user);
            const user = result.user;
            // getItem from localStorage
            let name = window.localStorage.getItem('userName');
            let interests = window.localStorage.getItem('userInterest');
            let source = window.localStorage.getItem('userSource');
            let features = window.localStorage.getItem('features');
            const userDocRef = doc(db, 'users', email);

            const userSnapShot = await getDoc(userDocRef);
            if (!userSnapShot.exists()) {
              try {
                await setDoc(userDocRef, {
                  name,
                  email,
                  interests,
                  source,
                  features,
                  createdAt: serverTimestamp(),
                });
              } catch (error) {
                console.error('An error occurred during account creation.');
              }
            }
            signOut(auth);
            window.localStorage.clear();
          
          }
        );
      }
    }
  }, []);

  return (
    <div> Thank you for sign up!</div>
  )
}
