'use client';
import { useRouter } from 'next/navigation';
import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, Dispatch, SetStateAction, useMemo } from 'react';
import { FlowState } from '../../early-access/page';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, sendEmailLink } from '@/app/config/firebase';
import {
  generateInitialValues,
  generateValidationRules,
} from '@/app/utils/formInitialization';
import textInputConfig from '../../config/signupForm';
import { FormValues } from '@/app/types/signupForm';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { sources } from 'next/dist/compiled/webpack/webpack';

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({
  setFlowState,
}) => {
  const initialValues = useMemo(
    () => generateInitialValues(textInputConfig),
    []
  );
  const validationRules = useMemo(
    () => generateValidationRules(textInputConfig),
    []
  );
  const router = useRouter();

  const form = useForm<FormValues>({
    initialValues,
    validate: validationRules,
  });


  async function handleSubmit(values: FormValues) {
    const { email, name, interests, source, features } = values;

    // setFlowState('processing')

    // // creates user document reference using email as document id
    // const userDocRef = doc(db, 'users', email);
    // // checks if document exists in db
    // const userSnapShot = await getDoc(userDocRef);

    // // creates a new document if none exists already
    // if (!userSnapShot.exists()) {
    //   try {
    //     await setDoc(userDocRef, {
    //       name,
    //       email,
    //       createdAt: serverTimestamp()
    //     })
    //   } catch (error) {
    //     console.error('An error occurred during account creation.');
    //   }
    // }

    // setFlowState('confirmed')

    /* Initial Sign In with Email Link */
    console.log('inside handleSubmit');
    console.log('user input values:', values);
    window.localStorage.setItem('userName', name);
    if (interests) {
      window.localStorage.setItem('userInterest', interests);
    }
    if (source) {
      window.localStorage.setItem('userSource', source);
    }
    if (features) {
      window.localStorage.setItem('features', features);
    }
    sendEmailLink(email);
  }

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <h1>Shape Our Future with Your Vision</h1>

          <h2>Get exclusive early access to try our product</h2>

          <section aria-label="Sign Up with Email">
            <h3>or sign up with email</h3>
            {textInputConfig.map((input, index) => (
              <TextInput
                key={`${input.field}-${index}`}
                label={input.label}
                placeholder={input.placeholder}
                required={input.required}
                {...form.getInputProps(input.field)}
              />
            ))}
            <Button type="submit">Join Waiting List</Button>
            <p>Privacy statement placeholder</p>
          </section>
        </form>
      </Box>
    </>
  );
};

export default PrelaunchSignUpForm;
