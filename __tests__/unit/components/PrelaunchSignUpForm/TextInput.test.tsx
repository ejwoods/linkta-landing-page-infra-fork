import { render, screen } from 'test-utils';
import PrelaunchSignUpForm, { PrelaunchSignUpFormProps } from '../../../../app/components/main-content/PrelaunchSignUpForm'

jest.mock('@/app/services/firestore', () => ({
  storeUserDataIfNew: jest.fn(() => Promise.resolve())
}));

describe('TextInput components in PrelaunchSignUpForm', () => {
  beforeEach(() => {
    const mockSetFlowState: jest.Mock = jest.fn();
    const props: PrelaunchSignUpFormProps = {
      setFlowState: mockSetFlowState,
    };

    render(<PrelaunchSignUpForm {...props} />)
  });

  it('renders the name TextInput with the correct label', () => {
    expect(screen.getByLabelText('What is your name? (required)')).toBeInTheDocument();
  });

  it('renders the email TextInput with the correct label', () => {
    expect(screen.getByLabelText('Where can we email you? (required)')).toBeInTheDocument();
  });

  it('renders the interests TextInput with the correct label', () => {
    expect(screen.getByLabelText('What would you love to learn? (optional)')).toBeInTheDocument();
  });

  it('renders the source TextInput with the correct label', () => {
    expect(screen.getByLabelText('How did you find us? (optional)')).toBeInTheDocument();
  });
});
