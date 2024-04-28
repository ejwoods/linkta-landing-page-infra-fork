import { render, screen, userEvent } from 'test-utils';
import UniversalButton, { UniversalButtonProps } from '@/app/components/common/UniversalButton';

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
};
