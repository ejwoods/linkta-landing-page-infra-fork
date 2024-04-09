'use client'

import { TextInput, Button, Box, createTheme, MantineProvider } from '@mantine/core';
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
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/config/firebase';

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}

interface FormValues {
  name: string;
  email: string;
}

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({ setFlowState }) => {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Please enter a valid email address')
    },
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

  async function handleSubmit({ email, name }: FormValues) {
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
          createdAt: serverTimestamp()
        })
      } catch (error) {
        console.error('An error occurred during account creation.');
      }
    }
    
    setFlowState('confirmed')
  }

  const theme= createTheme({
    components: {
      TextInput: TextInput.extend({
        classNames: {
          label: 'label-primary',
          input: 'input-primary'
        }
      }),
      Button: Button.extend({
        classNames: {
          root: 'button-primary'
        }
      })
    }
  });

  return (
    <MantineProvider theme={theme}>
      <Box className="text-center">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>

          <h1>Shape Our Future with Your Vision</h1>

          <h2>Get exclusive early access to try our product</h2>

          <section aria-label="Sign Up with Google or Github">
            <h3>sign up with google or github</h3>
            <Button className="bg-white border border-[#ffa51b] dark:text-dark-black" onClick={signUpWithGoogle}>Continue with Google</Button><br/>
            <Button onClick={signUpWithGitHub}>Continue with Github</Button>
          </section>

          <section aria-label="Sign Up with Email">
            <span className="w-full flex items-center line"><hr />or sign up with email<hr /></span>
            <TextInput
              required
              label="Name"
              {...form.getInputProps('name')}
            />

            <TextInput
              required
              label="Email"
              {...form.getInputProps('email')}
            />

            <Button type="submit">Join Waiting List</Button>
            <p>Privacy statement placeholder</p>
          </section>
        </form>
      </Box>
    </MantineProvider>
  )
}

export default PrelaunchSignUpForm;
