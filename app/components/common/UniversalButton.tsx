import { Button } from '@mantine/core';
import { ButtonHTMLAttributes } from 'react';

interface UniversalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  classNames: Record<string, string>;
  type: 'submit' | 'button' | 'reset';
}
/**
 *  - `id`: Unique identifier for the button.
 *  - `label`: Text to display on the button.
 *  - `classNames`: Object specifying CSS classes for styling.
 *  - `type`: The type attribute specifies the button type.
 *  - `...props`: Additional attributes that can be spread into the button for further customization.
 */
export default function UniversalButton({
  id,
  label,
  classNames,
  type,
  ...props
}: UniversalButtonProps) {
  classNames = Object.assign({ root: 'button-primary' }, classNames);
  return (
    <Button
      id={id}
      classNames={classNames}
      type={type}
      {...props}
    >
      {label}
    </Button>
  );
}
