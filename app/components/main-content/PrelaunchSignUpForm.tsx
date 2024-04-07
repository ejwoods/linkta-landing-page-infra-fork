'use client'

import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function PrelaunchSignUpForm() {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Please enter a valid email address')
    },
  });

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>

          <section aria-label="Sign Up with OAuth Providers">
            <h3>sign up with google or github</h3>
            <Button>Google Sign In Placeholder</Button>
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
          </section>
        </form>
      </Box>
    </>
  )
}
