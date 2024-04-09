'use client'

import { TextInput, Button, Box, createTheme, MantineProvider } from '@mantine/core';
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

          <section aria-label="Sign Up with OAuth Providers">
            <h3>sign up with google or github</h3>
            <Button className="bg-white border border-[#ffa51b]">Google Sign In Placeholder</Button><br/>
            <Button>Github Sign In Placeholder</Button>
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
