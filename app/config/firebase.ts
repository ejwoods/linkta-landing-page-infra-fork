import { initializeApp } from 'firebase/app';
import {
  type Auth,
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthCredential,
  getRedirectResult,
} from 'firebase/auth';
import type { FirebaseConfig } from '../types/firebase';

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!, //TODO: change to app domain
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
const auth: Auth = getAuth(firebaseApp);
auth.useDeviceLanguage();

export const signUpWithGoogle = () => {
  
  const googleProvider = new GoogleAuthProvider();
  signInWithRedirect(auth, googleProvider);
  return getRedirectResult(auth)
   .then((result) => {
     // This gives you a Google Access Token. You can use it to access the Google API.
     if(!result){
      console.error('No sign-in  redirect result found');
      return;
     }

     const credential = GoogleAuthProvider.credentialFromResult(result);
     //credential null check
     if(credential){
       const token = credential.accessToken;
     }

     // The signed-in user info.
     const user = result.user; 
     console.log('user:', user);
     // IdP data available using getAdditionalUserInfo(result)
  return user;
   }).catch((error) => {
     // Handle Errors here.
     const errorCode = error.code;
     const errorMessage = error.message;
     // The email of the user's account used.
     const email = error.customData.email;
     // The AuthCredential type that was used.
     const credential = GoogleAuthProvider.credentialFromError(error);
   });
}
