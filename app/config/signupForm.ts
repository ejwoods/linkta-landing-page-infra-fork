import {
  validateEmail,
  validateMinLength,
  validateName,
  validateOptionalMinLength,
} from '../utils/formValidation';
import type {
  FormValues,
  TextInputConfig,
  ValidationFunction,
} from '../types/signupForm';

/**
 * Creates a text input configuration object for form fields.
 * @param {string} field - The name of the field.
 * @param {string} label - The label text for the field.
 * @param {string} placeholder - The placeholder text for the field.
 * @param {ValidationFunction} validate - The validation function to apply to the field.
 * @param {boolean} [required=false] - Indicates if the field is required.
 * @returns {TextInputConfig} The configuration object for a text input field.
 */
const createConfigItem: (
  field: keyof FormValues,
  label: string,
  placeholder: string,
  validate: ValidationFunction,
  required: boolean,
  maxLength: number
) => TextInputConfig = (
  field,
  label,
  placeholder,
  validate,
  required,
  maxLength
) => {
  return { field, label, placeholder, validate, required, maxLength };
};

/**
 * Configuration array for text input fields used in the PreLaunchSignUpForm.
 * It includes configuration for various fields such as name, email, interests, etc.
 * @type {TextInputConfig[]}
 */
const textInputConfig: TextInputConfig[] = [
  createConfigItem(
    'name',
    'Name (required)',
    'Enter your name',
    validateName,
    true,
    50
  ),
  createConfigItem(
    'email',
    'Email (required)',
    'Enter your email',
    validateEmail,
    true,
    254
  ),
  createConfigItem(
    'interests',
    'Interests (optional)',
    'Enter your interests, separated by commas (e.g., Design, Programming)',
    validateOptionalMinLength(3, 'Interests'),
    false,
    150
  ),
  createConfigItem(
    'source',
    'How did you hear about us? (optional)',
    'Enter your source',
    validateOptionalMinLength(3, 'Source'),
    false,
    50
  ),
  createConfigItem(
    'features',
    'What features are you most interested in? (optional)',
    'Describe features, separated by commas (e.g., Collaboration, Sharing)',
    validateOptionalMinLength(5, 'Features'),
    false,
    200
  ),
];

export default textInputConfig;
