import { initializeApp } from 'firebase/app';
import {
  type Auth,
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import type { FirebaseConfig } from '../types/firebase';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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
export const auth: Auth = getAuth(firebaseApp);
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();
const ghProvider = new GithubAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signUpWithGoogle = () => signInWithRedirect(auth, googleProvider);
export const signUpWithGitHub = () => signInWithRedirect(auth, ghProvider);

export const db = getFirestore();

export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log('userDocRef:', userDocRef);
  const userSnapShot = await getDoc(userDocRef);

  //if user data does not exists
  if (!userSnapShot.exists()) {
    let displayName = userAuth.displayName || userAuth.reloadUserInfo.screenName
    const { email } = userAuth;
    const createdAt = new Date();
    //createt/set document with the data from userAuth in the users collection
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user in DB', error);
    }
  }

  // if user data exists
  return userDocRef;
};


/*
TODO: 1.update firebase & github to linkta admin account
      2. update redirect domain in auth_domain field
      3. figureout userAuth type
*/
