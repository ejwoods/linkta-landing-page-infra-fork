import { initializeApp } from 'firebase/app';
import {
  type Auth,
  getAuth,
  signOut,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthCredential,
  getRedirectResult,
  setPersistence,
  inMemoryPersistence,
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
const auth: Auth = getAuth(firebaseApp);
auth.useDeviceLanguage();
export const db = getFirestore();

export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);

  //if user data does not exists
  if (!userSnapShot.exists()) {
    const { displayNmae, email } = userAuth;
    //createt/set document with the data from userAuth in the users collection
    try {
      await setDoc(userDocRef, {
        displayNmae,
        email,
      });
    } catch (error) {
      console.log('error creating the user in DB', error);
    }
  }
  
  // if user data exists
  return userDocRef;


};

export const signUpWithGoogle = async () => {
  setPersistence(auth, inMemoryPersistence).then(async () => {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: 'select_account',
    });
    signInWithRedirect(auth, googleProvider);
    return getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        if (!result) {
          console.error('No sign-in  redirect result found');
          return;
        }

        //  const credential = GoogleAuthProvider.credentialFromResult(result);
        //  //credential null check
        //  if(credential){
        //    const token = credential.accessToken;
        //  }

        // The signed-in user info.
        const user = result.user;
        console.log('user:', user);
        return user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
};

export const signUpWithGitHub = async () => {
  const ghProvider = new GithubAuthProvider();
  // ghProvider.addScope('user');
  signInWithRedirect(auth, ghProvider);
  return getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      if (!result) {
        console.error('No sign-in  redirect result found');
        return;
      }

      const credential = GithubAuthProvider.credentialFromResult(result);
      //credential null check
      if (credential) {
        const token = credential.accessToken;
      }

      // The signed-in user info.
      const user = result.user;
      console.log('GHuser:', user);
      // IdP data available using getAdditionalUserInfo(result)
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
    });
};

export const signUpWthGHpop = async () => {
  const ghProvider = new GithubAuthProvider();
  ghProvider.addScope('user.email');
  return signInWithPopup(auth, ghProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
      }

      // The signed-in user info.
      const user = result.user;
      console.log('GH User:', user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log('sign out successful!');
    })
    .catch((error) => {
      console.error(`Sign out error: ${error}`);
    });
};
