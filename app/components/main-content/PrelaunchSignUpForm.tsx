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
      <Box maw={300} mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Button>Google Sign In Placeholder</Button>

          <Button>Github Sign In Placeholder</Button>

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

          <Button type="submit">Sign Up</Button>
        </form>
      </Box>
    </>
  )
}
