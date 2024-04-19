'use client';

import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, Dispatch, SetStateAction, useMemo } from 'react';
import { FlowState } from '../../early-access/page'
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signUpWithGitHub,
  signUpWithGoogle,
  createUserDoc,
} from '@/app/config/firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/config/firebase';
import {
  generateInitialValues,
  generateValidationRules,
} from '@/app/utils/formInitialization';
import textInputConfig from '../../config/signupForm';
import { FormValues } from '@/app/types/signupForm';

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({ setFlowState }) => {

  const initialValues = useMemo(() => generateInitialValues(textInputConfig), []);
  const validationRules = useMemo(() => generateValidationRules(textInputConfig), []);

  const form = useForm<FormValues>({
    initialValues,
    validate: validationRules
  });

  useEffect(() => {
    async function checkRedirectResult() {
      const res = await getRedirectResult(auth); // Needed to access user data after redirect during OAuth sign in

      if (res) {
        setFlowState('processing');
        await createUserDoc(res.user);
        setFlowState('confirmed');
      }
    }
    checkRedirectResult();
  }, [setFlowState]);

  async function handleSubmit(values: FormValues) {
    const { email, name } = values;

    setFlowState('processing')

    // creates user document reference using email as document id
    const userDocRef = doc(db, 'users', email);
    // checks if document exists in db
    const userSnapShot = await getDoc(userDocRef);

    // creates a new document if none exists already
    if (!userSnapShot.exists()) {
      try {
        await setDoc(userDocRef, {
          name,
          email,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        console.error('An error occurred during account creation.');
      }
    }

    setFlowState('confirmed');
  }

  return (
    <>
      <Box className="text-center max-w-screen-sm sm:px-4">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <h1 className="pb-4">Shape Our Future with Your Vision</h1>

          <h2 className="text-sm">
            Get exclusive early access to try our product
          </h2>

          <section
            aria-label="Sign Up with Google or Github"
            className="text-sm px-2 pb-2"
          >
            <h3>Sign up with Google or GitHub</h3>
            <Button
              className="bg-white border border-[#ffa51b] dark:text-dark-black"
              classNames={{
                root: 'button-primary',
              }}
              onClick={signUpWithGoogle}
            >
              Continue with Google
            </Button>
            <br />
            <Button
              classNames={{
                root: 'button-primary',
              }}
              onClick={signUpWithGitHub}
            >
              Continue with GitHub
            </Button>
          </section>

          <section aria-label="Sign Up with Email" className="flex-col justify-center mx-auto">
            <span className="w-full flex items-center line text-sm">
              <hr className="flex-1 mx-1" />
              or sign up with email
              <hr className="flex-1 mx-1" />
            </span>
            {textInputConfig.map((input, index) => (
              <TextInput
              key={`${input.field}-${index}`}
              label={input.label}
              placeholder={input.placeholder}
              required={input.required}
              {...form.getInputProps(input.field)}
              className='sm:dark:text-dark-accent'
              classNames={{
                root: 'w-full',
                label: 'label-primary',
                input: 'input-primary'
              }}
              />
            ))}
            <Button
              type="submit"
              classNames={{
                root: 'button-primary',
              }}
            >
              Join Waiting List
            </Button>
            <footer className="pt-2">
              <PrivacyAgreement />
            </footer>
          </section>
        </form>
      </Box>
    </>
  );
};

export default PrelaunchSignUpForm;
