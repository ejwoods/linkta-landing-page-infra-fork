import { render, screen } from 'test-utils';
import PrelaunchSignUpForm, { PrelaunchSignUpFormProps } from '../../../../app/components/main-content/PrelaunchSignUpForm'

jest.mock('@/app/services/firestore', () => ({
  storeUserDataIfNew: jest.fn(() => Promise.resolve())
}));

describe('TextInput components in PrelaunchSignUpForm', () => {
  const setup = () => {
    const mockSetFlowState: jest.Mock = jest.fn();
    const props: PrelaunchSignUpFormProps = {
      setFlowState: mockSetFlowState,
    };

    const renderResult = render(<PrelaunchSignUpForm {...props} />)
    return { renderResult }
  };

  it('renders the name TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'What is your name? (required)' })).toBeInTheDocument();
  });
  
  it('renders the email TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'Where can we email you? (required)' })).toBeInTheDocument();
  });  

  it('renders the interests TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'What would you love to learn? (optional)' })).toBeInTheDocument();
  });

  it('renders the source TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'How did you find us? (optional)' })).toBeInTheDocument();
  });
});
