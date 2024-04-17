import { validateEmail, validateMinLength } from "../utils/formValidation";
import type { ValidationFunction } from '../types/signupForm';
interface TextInputConfig {
  field: string;
  label: string;
  placeholder: string;
  validate?: ValidationFunction;
  required?: boolean;
}

// Factory function to create text input configurations
function createConfigItem(
  field: string,
  label: string,
  placeholder: string,
  validate: (value: string) => string | null | undefined,
  required = false
): TextInputConfig {
  return { field, label, placeholder, validate, required };
}

const TEXT_INPUT_CONFIG: TextInputConfig[] = [
  createConfigItem('name', 'Name', 'Enter your name', validateMinLength(1, 'Name'), true),
  createConfigItem('email', 'Email', 'Enter your email', validateEmail, true),
  createConfigItem('interests', 'Interests', 'Enter your interests', validateMinLength(3, 'Interests')),
  createConfigItem('source', 'How did you hear about us?', 'Enter your source', validateMinLength(3, 'Source')),
  createConfigItem('features', 'What features are you most interested in?', 'Describe features', validateMinLength(5, 'Features'))
];

export default TEXT_INPUT_CONFIG;