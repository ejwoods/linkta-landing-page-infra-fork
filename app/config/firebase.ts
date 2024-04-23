import { initializeApp } from 'firebase/app';
import {
  type Auth,
  getAuth,
  sendSignInLinkToEmail
} from 'firebase/auth';
import type { FirebaseConfig } from '../types/firebase';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!, 
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

if (
  !firebaseConfig.apiKey ||
  !firebaseConfig.authDomain ||
  !firebaseConfig.projectId ||
  !firebaseConfig.appId
) {
  throw new Error(
    'Firebase configuration error: Missing essential configuration values'
  );
}

const firebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(firebaseApp); //initialize Firebase Authentication service
auth.useDeviceLanguage(); //detecting/using user perferrd languague on their devices
export const db = getFirestore(firebaseApp); //initialize Firestore service



const actionCodeSettings = {
  url: 'http://localhost:3000/thanku', // the URl we want user to be redirecting to eg. 'linkta.io/thankyou' 'https://linkta.io'|| 'http://localhost:3000/early-access'
  handleCodeInApp: true,
}

export const sendEmailLink = ( email: string ) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    window.localStorage.setItem('emailForSignIn', email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message
  })
}

