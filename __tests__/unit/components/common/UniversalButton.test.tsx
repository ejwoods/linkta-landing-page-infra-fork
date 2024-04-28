import { render, screen, userEvent } from 'test-utils';
import UniversalButton, { UniversalButtonProps } from '@/app/components/common/UniversalButton';

/**
 * Sets up UniversalButton for testing by clearing all mocks, setting up userEvent for user interactions, and rendering UniversalButton with test props.
 * @param {Partial<UniversalButtonProps>} additionalProps - Additional props needed for test.
 * @returns {object} An object containing utilities provided by userEvent and render.
 */
const setup = (additionalProps?: Partial<UniversalButtonProps>) => {
  jest.clearAllMocks;

  const props: UniversalButtonProps = {
    id: 'test-button',
    label: 'Click Here',
    classNames: {},
    type: 'button',
    ...additionalProps,
  };

const user = userEvent.setup();
const renderResult = render(<UniversalButton {...props} />)
return { user, ...renderResult }
};

describe('UniversalButton component in isolation', () => {
  it('renders the UniversalButton accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('button', { name: 'Click Here' })).toBeInTheDocument();
  });

  it('UniversalButton can be clicked', async () => {
    const mockOnClick = jest.fn();
    const { user } = setup({ onClick: mockOnClick});
    const button = screen.getByRole('button', { name: 'Click Here' });
    await user.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
