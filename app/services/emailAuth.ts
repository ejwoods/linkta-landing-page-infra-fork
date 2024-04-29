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
      // TODO: what are we doing with these?
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

/**
 * Authenticates and signs in user following redirect. Then saves their form data to database.
 * @param {email} email - User's email address. Must be passed or user will be asked to provide it.
 */
export const authenticateAndSaveUserDataFromEmailRedirect = (email: string) => {
  signInWithEmailLink(auth, email, window.location.href).then(
    async (result) => {
      // retrieve form data from localStorage
      const name = window.localStorage.getItem('userName');
      const interestsJSON = window.localStorage.getItem('userInterest');
      const interests = interestsJSON ? JSON.parse(interestsJSON) : null;
      const source = window.localStorage.getItem('userSource');

      // sanitize data from local storage before sending to db
      const sanitizedUserData = userDataSanitizationSchema.parse({
        email,
        name,
        interests,
        source,
      });

      // store sanitized data in firestore
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
    }
  );
};
