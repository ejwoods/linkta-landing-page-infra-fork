'use client';

import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { FlowState } from '../../early-access/page'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/config/firebase';
import {
  generateInitialValues,
  generateValidationRules,
} from '@/app/utils/formInitialization';
import textInputConfig from '../../config/signupForm';
import { FormValues } from '@/app/types/signupForm';
import PrivacyAgreement from '../common/PrivacyAgreement';

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

          <section aria-label="Sign Up with Email" className="flex-col justify-center mx-auto">
            {textInputConfig.map((input, index) => (
              <TextInput
              key={`${input.field}-${index}`}
              label={input.label}
              placeholder={input.placeholder}
              required={input.required}
              {...form.getInputProps(input.field)}
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
