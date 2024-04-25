import { Button } from '@mantine/core';

interface UniversalButtonProps {
  id: string;
  classNames: Record<string, string>;
  label: string;
  onClick: () => void;
}
/**
 * - `label`: The text to display on the button.
 * - `onClick`: A function to call when the button is clicked.
 * This allows the component to be reused for different actions and labels.
 */
export default function UniversalButton({
  id,
  classNames,
  label,
  onClick,
}: UniversalButtonProps) {
  classNames = Object.assign({ root: 'button-primary' }, classNames);
  return (
    <Button
      id={id}
      classNames={classNames}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
