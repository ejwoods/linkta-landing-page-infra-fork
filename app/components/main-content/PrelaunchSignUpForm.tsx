'use client';
import React, { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signUpWithGitHub,
  signUpWithGoogle,
  createUserDoc,
} from '@/app/config/firebase'; 

export default function PrelaunchSignUpForm() {
    useEffect(() => {
      async function checkRedirectResult() {
        const res = await getRedirectResult(auth); //Needed to access user data after redirect during OAuth sign in
        console.log('res:',res);
        if (res) {
          await createUserDoc(res.user);
        }
      }
      checkRedirectResult();
    }, []);

  const handleSignUpWithGoogle = () => {
    signUpWithGoogle();
  }

  const handleSignUpWithGitHub = () => {
    signUpWithGitHub();
  }
  return (
    <div>
      <button
        className="border"
        onClick={handleSignUpWithGoogle}
      >
        Signup with Google
      </button>
      <br />
      <button
        className="border"
        onClick={handleSignUpWithGitHub}
      >
        Signup with GitHub
      </button>
    </div>
  );
}


