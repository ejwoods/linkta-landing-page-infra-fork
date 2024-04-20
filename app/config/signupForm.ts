import type { FormValues, TextInputConfig } from '../types/signupForm';

/**
 * Creates a text input configuration object for form fields.
 * @param {keyof FormValues} field - The name of the field.
 * @param {string} label - The label text for the field.
 * @param {string} placeholder - The placeholder text for the field.
 * @param {boolean} required - Indicates if the field is required.
 * @returns {TextInputConfig} The configuration object for a text input field.
 */
const createConfigItem: (
  field: keyof FormValues,
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
  createConfigItem(
    'name',
    'What\'s your name?',
    'Enter your name',
    true
  ),
  createConfigItem('email', 'Where can we email you?', 'Enter your email', true),
  createConfigItem(
    'interests',
    'What would you love to learn?',
    'Enter your interests, separated by commas (e.g., design, programming etc.)',
    false
  ),
  createConfigItem(
    'source',
    'How did you discover us?',
    'E.g.LinkedIn, Instagram etc.',
    false
  ),
  createConfigItem(
    'features',
    'Any specific features you\'re excited about?',
    'Describe features, separated by commas (e.g., collaboration, sharing etc.)',
    false
  ),
];

export default textInputConfig;
