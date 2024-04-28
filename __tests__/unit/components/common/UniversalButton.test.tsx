import { render, screen, userEvent } from 'test-utils';
import UniversalButton, { UniversalButtonProps } from '@/app/components/common/UniversalButton';

/**
 * Sets up UniversalButton for testing by clearing all mocks, setting up userEvent for user interactions, and rendering UniversalButton with test props.
 * @returns {object} An object containing utilities provided by userEvent and render.
 */
const setup = () => {
  jest.clearAllMocks;

  const props: UniversalButtonProps = {
    id: 'test-button',
    label: 'Click Here',
    classNames: {},
    type: 'button',
  };

const user = userEvent.setup();
const renderResult = render(<UniversalButton {...props} />)
return { user, ...renderResult }
};
