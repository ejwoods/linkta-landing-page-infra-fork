import { Button } from '@mantine/core';

interface UniversalButtonProps {
  onClick: () => void;
  label: string;
  classNames: Record<string, string>;
}
/**
 * - `onClick`: A function to call when the button is clicked.
 * - `label`: The text to display on the button.
 * This allows the component to be reused for different actions and labels.
 */
export default function UniversalButton({ onClick, label, classNames } : UniversalButtonProps) {
  classNames = Object.assign({root: 'button-primary'}, classNames);
  return <Button onClick={onClick} classNames={classNames}>{label}</Button>;
}
