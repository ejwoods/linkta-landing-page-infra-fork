// export default function PrelaunchSignUpForm() {
//   return <div>PrelaunchSignUpForm</div>;
// }
'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Auth } from 'firebase/auth';
import {
  signUpWithGitHub,
  signUpWithGoogle,
  signOutUser,
  createUserDoc
} from '@/app/config/firebase'; // Removed unused import

interface User {
  name?: string;
  email: string;
}

const initialState: User = {
  name: '',
  email: '',
  // Removed the invalid comment from the object
};

export default function PrelaunchSignUpForm() {
  const [user, setUser] = useState(initialState);
  const router = useRouter();

const signUpWithGoogleRedirect = () => {
  const logGoogleUser = async () => {
    const {user} = await signUpWithGoogle();
    const userDocRef = await createUserDoc(user);
  }
}

  return (
    <div>
      <button
        className="border"
        onClick={signUpWithGoogle}
      >
        Signup with Google
      </button>
      <br />
      <button
        className="border"
        onClick={() => signUpWithGitHub()}
      >
        Signup with GitHub
      </button>
    </div>
  );
}

//TODO: figure out why, once getting authorized, google redirect window doesnt show up
/*
FE------------
Using Firebase:
1.user sign up with Google or GH
2.after authentication -> get user name, email and send to back end()
3.store in DB

Using SignUp Form:
1. collect input: fullName, email, interests(optional - dropdown meun), hdyhau(optional - dropdown)
2. send back to backend
3.store in DB

BE--------------
1. check if email has already signup?
*/
