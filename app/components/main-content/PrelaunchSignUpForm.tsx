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
      <div>PrelaunchSignUpForm</div>
    </>
  )
}
