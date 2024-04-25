'use client';

import { TextInput, Button, Box, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dispatch, SetStateAction } from 'react';
import { FlowState } from '../../early-access/page'
import textInputConfig from '../../config/signupForm';
import { zodResolver } from 'mantine-form-zod-resolver';
import userDataValidationSchema, { type
  UserDataValidation,
} from '@/app/schemas/userDataValidationSchema';
import { storeUserDataIfNew } from '@/app/services/firestore';
import PrivacyAgreement from '../common/PrivacyAgreement';
import userDataSanitizationSchema from '@/app/schemas/userDataSanitizationSchema';

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}

const defaultFormValues = {
  name: '',
  email: '',
  interests: '',
  source: '',
};

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({
  setFlowState,
}) => {
  const form = useForm({
    validateInputOnBlur: ['name', 'email'],
    initialValues: defaultFormValues,
    validate: zodResolver(userDataValidationSchema),
  });

  async function handleSignupSubmit(rawUserData: UserDataValidation) {
    setFlowState('processing')

    const sanitizedUserData = userDataSanitizationSchema.parse(rawUserData);

    try {
      const userId = sanitizedUserData.email; // use user email as user Id to ensure user uniqueness
      await storeUserDataIfNew(userId, sanitizedUserData);
    } catch (error) {
      console.error('Error checking user data existence or storing user data.');
    }

    setFlowState('confirmed');
    form.reset();
  }

  return (
    <>
      <Box className="text-center max-w-screen-sm sm:px-4">
        <form onSubmit={form.onSubmit(handleSignupSubmit)}>
          <h1 className="pb-4">Shape Our Future with Your Vision</h1>

          <h2 className="text-sm">
            Get exclusive early access to try our product
          </h2>

          <section aria-label="Sign Up with Email" className="flex-col justify-center mx-auto">
            {textInputConfig.map((input, index) => (
              input.tooltipLabel ? (
                <Tooltip key={`${input.field}-${index}`} label={input.tooltipLabel} position="bottom">
                  <TextInput
                    label={input.label}
                    required={input.required}
                    aria-required={input.required ? 'true' : 'false'}
                    {...form.getInputProps(input.field)}
                  />
                  </Tooltip>
                  ) : (
                <TextInput
                  key={`${input.field}-${index}`}
                  label={input.label}
                  required={input.required}
                  aria-required={input.required ? 'true' : 'false'}
                {...form.getInputProps(input.field)}
                  />
              )
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
