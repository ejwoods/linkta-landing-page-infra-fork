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
export const authenticateAndSaveUserDataFromEmailRedirect = (email: string) => {
  signInWithEmailLink(auth, email, window.location.href)
    .then(async (result) => {
      const localStorageData = {
        email: email,
        name: window.localStorage.getItem('userName'),
        interests: window.localStorage.getItem('userInterest')
          ? JSON.parse(window.localStorage.getItem('userInterest') as string)
          : null,
        source: window.localStorage.getItem('userSource'),
      };

      const reducedLocalStorageData: { [key: string]: string | string[] } = Object.entries(localStorageData)
          .filter(([key, value]) => value !== null)
          .reduce<{ [key: string]: string | string[] }>((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});

      const sanitizedUserData = userDataSanitizationSchema.parse(
        reducedLocalStorageData
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
    })
    .catch((error) => {
      console.error(
        'Error occurred during sign in with email. This is likely because your email is already saved in our database. Thank you for signing up for Linkta!'
      );
    });
};
