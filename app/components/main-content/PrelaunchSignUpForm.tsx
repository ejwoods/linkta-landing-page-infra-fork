'use client'

import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signUpWithGitHub,
  signUpWithGoogle,
  createUserDoc,
} from '@/app/config/firebase'; 

export default function PrelaunchSignUpForm({ setFlowState }) {

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

      // TODO: remove this log
      console.log('res:',res);
      
      if (res) {
        setFlowState('processing');
        await createUserDoc(res.user);
        // TODO: error handling? What happens if user is not saved?
        setFlowState('confirmed')
      }
    }
    checkRedirectResult();
  }, [setFlowState]);

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>

          <h1>Shape Our Future with Your Vision</h1>

          <h2>Get exclusive early access to try our product</h2>

          <section aria-label="Sign Up with OAuth Providers">
            <h3>sign up with google or github</h3>
            <Button>Google Sign In Placeholder</Button><br/>
            <Button>Github Sign In Placeholder</Button>
          </section>

          <section aria-label="Sign Up with Email">
            <h3>or sign up with email</h3>
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
    </>
  )
}
