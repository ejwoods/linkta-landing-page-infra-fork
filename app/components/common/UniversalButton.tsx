import { Button } from '@mantine/core';
import { ButtonHTMLAttributes } from 'react';

export interface UniversalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  classNames: Record<string, string>;
  type: 'submit' | 'button' | 'reset';
}
/**
 *  - `id`: Unique identifier for the button.
 *  - `label`: Text to display on the button.
 *  - `classNames`: Mantine-specific prop for custom class names applied to sub-components of the Button.
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
