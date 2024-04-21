import {
  DocumentReference,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import type { userDataSanitization } from '../schemas/userDataSanitizationSchema';
import { db } from '../config/firebase';
/**
 * Asynchronously checks the existence of a Firestore document.
 *
 * @param {DocumentReference} docRef - Reference to the Firestore document.
 * @returns {Promise<boolean>} True if the document exists, false otherwise or if an error occurs.
 */
export const doesUserDataExist = async (
  userDocRef: DocumentReference
): Promise<boolean> => {
  try {
    const documentSnapshot = await getDoc(userDocRef);
    return documentSnapshot.exists();
  } catch (error) {
    console.error('Error checking user data existence.');
    return false;
  }
};

export const storeUserDataIfNew = async (
  userId: string,
  userData: userDataSanitization
): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userExists = await doesUserDataExist(userDocRef);
    if (!userExists) {
      await setDoc(userDocRef, userData);
    }
  } catch (error) {
    console.error('Failed to store user data.');
  }
};
