import { render, screen } from '@testing-library/react'
import PrelaunchSignUpForm, { PrelaunchSignUpFormProps } from '../../../../app/components/main-content/PrelaunchSignUpForm'

describe('TextInput components in PrelaunchSignUpForm', () => {
  beforeEach(() => {
    const mockSetFlowState: jest.Mock = jest.fn();
    const props: PrelaunchSignUpFormProps = {
      setFlowState: mockSetFlowState,
    };

    render(<PrelaunchSignUpForm {...props} />)
  });

});
