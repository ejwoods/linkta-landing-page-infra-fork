import { Button } from '@mantine/core';
import { ButtonHTMLAttributes } from 'react';

interface UniversalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  classNames: Record<string, string>;
  type: 'submit' | 'button' | 'reset';
}
/**
 * - `onClick`: A function to call when the button is clicked.
 * - `label`: The text to display on the button.
 * This allows the component to be reused for different actions and labels.
 */
export default function UniversalButton({
  id,
  label,
  classNames,
  ...props
}: UniversalButtonProps) {
  classNames = Object.assign({ root: 'button-primary' }, classNames);
  return (
    <Button
      id={id}
      classNames={classNames}
      {...props}
    >
      {label}
    </Button>
  );
}
