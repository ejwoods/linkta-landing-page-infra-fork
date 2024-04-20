'use client'

import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, Dispatch, SetStateAction } from 'react';
import { FlowState } from '../../early-access/page'
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signUpWithGitHub,
  signUpWithGoogle,
  createUserDoc,
} from '@/app/config/firebase';
import { doc } from 'firebase/firestore';
import { db } from '@/app/config/firebase';
import textInputConfig from '../../config/signupForm';
import { zodResolver } from 'mantine-form-zod-resolver';
import userDataValidationSchema, { UserDataValidation } from '@/app/schemas/userDataValidationSchema';
import userDataSanitizationSchema from '@/app/schemas/userDataSanitizationSchema';
import { checkDocumentExists, createUserDocument } from '@/app/services/firestore';

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}

const initialFormValues = {
  name: '',
  email: '',
  interests: '',
  source: '',
  features: '',
};

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({ setFlowState }) => {

  const form = useForm({
    initialValues: initialFormValues,
    validate: zodResolver(userDataValidationSchema)
  });

  useEffect(() => {
    async function checkRedirectResult() {
      const res = await getRedirectResult(auth);  // Needed to access user data after redirect during OAuth sign in

      if (res) {
        setFlowState('processing');
        await createUserDoc(res.user);
        setFlowState('confirmed')
      }
    }
    checkRedirectResult();
  }, [setFlowState]);

  async function handleSubmit(userData: UserDataValidation) {

    setFlowState('processing')

    const cleanUserData = userDataSanitizationSchema.parse(userData);

    const userDocRef = doc(db, 'users', cleanUserData.email);

    try {
      const documentExists = await checkDocumentExists(userDocRef);
      if (!documentExists) {
        await createUserDocument(userDocRef, cleanUserData);
      }
    } catch (error) {
      console.error('An error occurred during the user data process');
      //TODO: add error state to render error component
    }

    setFlowState('confirmed');
    form.reset();
  }

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleSubmit)}>

          <h1>Shape Our Future with Your Vision</h1>

          <h2>Get exclusive early access to try our product</h2>

          <section aria-label="Sign Up with Google or Github">
            <h3>sign up with google or github</h3>
            <Button onClick={signUpWithGoogle}>Continue with Google</Button><br/>
            <Button onClick={signUpWithGitHub}>Continue with Github</Button>
          </section>

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
  )
}

export default PrelaunchSignUpForm;
