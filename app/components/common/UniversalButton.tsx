import { Button } from '@mantine/core';

interface UniversalButtonProps {
  onClick: () => void;
  label: string;
}
/**
 * - `onClick`: A function to call when the button is clicked.
 * - `label`: The text to display on the button.
 * This allows the component to be reused for different actions and labels.
 */
export default function UniversalButton({ onClick, label } : UniversalButtonProps) {
  return <Button onClick={onClick} classNames={{root: 'button-primary'}}>{label}</Button>;
}
