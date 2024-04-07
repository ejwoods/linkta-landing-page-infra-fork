import { Button } from '@mantine/core';
/**
 * - `onClick`: A function to call when the button is clicked.
 * - `label`: The text to display on the button.
 * This allows the component to be reused for different actions and labels.
 */
export default function GenericButton({ onClick, label }) {
  return <Button onClick={onClick}>{label}</Button>;
}
