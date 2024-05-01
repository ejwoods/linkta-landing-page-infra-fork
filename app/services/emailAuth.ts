import {
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
} from 'firebase/auth';
import { auth, actionCodeSettings } from '../config/firebase';
import userDataSanitizationSchema from '../schemas/userDataSanitizationSchema';
import { storeUserDataIfNew } from './firestore';

/**
 * Sends authentication link to user email and saves user email address to local storage.
 * @param {string} email - user's email address
 */
export const sendEmailLink = (email: string) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('emailForSignIn', email);
    })
    .catch((error) => {
      console.error(
        'Error occurred while sending email authentication link. Please try again.'
      );
    });
};

/**
 * Authenticates and signs in user following redirect. Then saves their form data to database.
 * @param {email} email - User's email address. Must be passed or user will be asked to provide it.
 */
export const authenticateAndSaveUserDataFromEmailRedirect = async (email: string) => {
  try {
    await signInWithEmailLink(auth, email, window.location.href)
  } catch (error) {
      console.error(
        'Error occurred during sign in with email. This is likely because your email is already saved in our database. Thank you for signing up for Linkta!', error
      );
  }

  const localStorageData = {
    email: email,
    name: window.localStorage.getItem('userName'),
    interests: window.localStorage.getItem('userInterest') || '',
    source: window.localStorage.getItem('userSource') || '',
  };

  const sanitizedUserData = userDataSanitizationSchema.parse(
    localStorageData
  );

  try {
    const userId = sanitizedUserData.email; // use user email as user Id to ensure user uniqueness
    await storeUserDataIfNew(userId, sanitizedUserData);
  } catch (error) {
    console.error(
      'Error checking user data existence or storing user data.'
    );
  }

  signOut(auth);
  window.localStorage.clear();
};
