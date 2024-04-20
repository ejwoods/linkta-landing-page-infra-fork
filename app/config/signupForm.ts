import { UserDataValidation } from '../schemas/userDataValidationSchema';
import type { TextInputConfig } from '../types/signupForm';

/**
 * Creates a text input configuration object for form fields.
 * @param {keyof UserDataValidation} field - The name of the field.
 * @param {string} label - The label text for the field.
 * @param {string} placeholder - The placeholder text for the field.
 * @param {boolean} required - Indicates if the field is required.
 * @returns {TextInputConfig} The configuration object for a text input field.
 */
const createConfigItem: (
  field: keyof UserDataValidation,
  label: string,
  placeholder: string,
  required: boolean
) => TextInputConfig = (field, label, placeholder, required) => {
  return { field, label, placeholder, required };
};

/**
 * Configuration array for text input fields used in the PreLaunchSignUpForm.
 * It includes configuration for various fields such as name, email, interests, etc.
 * @type {TextInputConfig[]}
 */
const textInputConfig: TextInputConfig[] = [
  createConfigItem('name', "What's your name?", 'Enter your name here', true),
  createConfigItem(
    'email',
    'Where can we email you?',
    'Email address goes here',
    true
  ),
  createConfigItem(
    'interests',
    'What would you love to learn?',
    'Tell us your interests, e.g., design, coding... (separate with commas)',
    false
  ),
  createConfigItem(
    'source',
    'How did you find us?',
    'Where did you hear about us?',
    false
  ),
  createConfigItem(
    'features',
    "Any exciting features in mind?",
    'Exciting features? Let us know! (separate with commas)',
    false
  ),
];

export default textInputConfig;
