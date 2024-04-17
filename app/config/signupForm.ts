import { validateEmail, validateMinLength } from "../utils/formValidation";
import type { ValidationFunction } from '../types/signupForm';

interface TextInputConfig {
  field: string;
  label: string;
  placeholder: string;
  validate?: ValidationFunction;
  required?: boolean;
}

/**
 * Factory function to create text input configurations
 **/
function createConfigItem(
  field: string,
  label: string,
  placeholder: string,
  validate: ValidationFunction,
  required = false
): TextInputConfig {
  return { field, label, placeholder, validate, required };
}

/**
 * Configuration for text input fields in PreLaunchSignUpForm.
 * Each item represents a text input field with its properties.
 **/
const textInputConfig: TextInputConfig[] = [
  createConfigItem('name', 'Name (required)', 'Enter your name', validateMinLength(1, 'Name'), true),
  createConfigItem('email', 'Email (required)', 'Enter your email', validateEmail, true),
  createConfigItem('interests', 'Interests (optional)', 'Enter your interests', validateMinLength(3, 'Interests')),
  createConfigItem('source', 'How did you hear about us? (optional)', 'Enter your source', validateMinLength(3, 'Source')),
  createConfigItem('features', 'What features are you most interested in? (optional)', 'Describe features', validateMinLength(5, 'Features'))
];

export default textInputConfig;
