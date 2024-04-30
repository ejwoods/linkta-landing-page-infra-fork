import { render, userEvent } from 'test-utils';
import PrelaunchSignUpForm, { PrelaunchSignUpFormProps } from '@/app/components/main-content/PrelaunchSignUpForm';

jest.mock('@/app/services/firestore', () => ({
  storeUserDataIfNew: jest.fn(() => Promise.resolve())
}));

/**
 * Sets up PrelaunchSignUpForm for testing by clearing all mocks, setting up userEvent for user interactions, and rendering PrelaunchSignUpForm with mocked handleSuccessfulSubmit prop.
 * @returns {object} An object containing utilities provided by userEvent and render.
 */
const prelaunchSignUpFormSetup = () => {
  jest.clearAllMocks();
  
  const mockHandleSuccessfulSubmit: jest.Mock = jest.fn();
  const props: PrelaunchSignUpFormProps = {
    handleSuccessfulSubmit: mockHandleSuccessfulSubmit,
  };

  const user = userEvent.setup();
  const renderResult = render(<PrelaunchSignUpForm {...props} />)
  return { user, ...renderResult }
};

export default prelaunchSignUpFormSetup;
