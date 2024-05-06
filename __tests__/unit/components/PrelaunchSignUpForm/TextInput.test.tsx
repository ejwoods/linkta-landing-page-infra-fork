import { screen } from 'test-utils';
import prelaunchSignUpFormSetup from 'test-utils/components/prelaunchSignUpFormSetup';

describe('TextInput components in PrelaunchSignUpForm', () => {

  it('renders the name TextInput accessibly and with the correct label', () => {
    prelaunchSignUpFormSetup();
    expect(screen.getByRole('textbox', { name: 'Name (required)' })).toBeInTheDocument();
  });
  
  it('renders the email TextInput accessibly and with the correct label', () => {
    prelaunchSignUpFormSetup();
    expect(screen.getByRole('textbox', { name: 'Email (required)' })).toBeInTheDocument();
  });  

  it('renders the interests TextInput accessibly and with the correct label', () => {
    prelaunchSignUpFormSetup();
    expect(screen.getByRole('textbox', { name: 'What would you love to learn? (optional)' })).toBeInTheDocument();
  });

  it('renders the source TextInput accessibly and with the correct label', () => {
    prelaunchSignUpFormSetup();
    expect(screen.getByRole('textbox', { name: 'How did you find us? (optional)' })).toBeInTheDocument();
  });

  it('allows users to enter text into the name TextInput', async () => {
    const { user } = prelaunchSignUpFormSetup();
    const input = screen.getByRole('textbox', { name: 'Name (required)' }) as HTMLInputElement;
    await user.type(input, 'Mabel Wuckert');
    expect(input.value).toBe('Mabel Wuckert');
  });

  it('allows users to enter text into the email TextInput', async () => {
    const { user } = prelaunchSignUpFormSetup();
    const input = screen.getByRole('textbox', { name: 'Email (required)'}) as HTMLInputElement;
    await user.type(input, 'mabel.w@gmail.com');
    expect(input.value).toBe('mabel.w@gmail.com');
  });

  it('allows users to enter text into the interests TextInput', async () => {
    const { user } = prelaunchSignUpFormSetup();
    const input = screen.getByRole('textbox', { name: 'What would you love to learn? (optional)'}) as HTMLInputElement;
    await user.type(input, 'Coding, Design, Learning');
    expect(input.value).toBe('Coding, Design, Learning');
  });

  it('allows users to enter text into the source TextInput', async () => {
    const { user } = prelaunchSignUpFormSetup();
    const input = screen.getByRole('textbox', { name: 'How did you find us? (optional)'}) as HTMLInputElement;
    await user.type(input, 'LinkedIn');
    expect(input.value).toBe('LinkedIn');
  });
});
