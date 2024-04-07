// export default function PrelaunchSignUpForm() {
//   return <div>PrelaunchSignUpForm</div>;
// }
'use client'
import React, { useState } from "react";
import { signUpWithGoogle } from "@/app/config/firebase";
const initialState = {
  name: '',
  email: '',
//interest; hdyhau?
};

export default function PrelaunchSignUpForm() {
const [user, setUser] = useState(initialState);

  return (
  <div>
    <button className="border" onClick={() => signUpWithGoogle()} >signup with Google</button>
    {/* TODO: <button className="border" onClick={() => signUpWithGitHub()} >signup with Google</button> */}
  </div>
  )
}



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