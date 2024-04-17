import { validateEmail, validateMinLength } from "./validationUtils";

interface TextInputConfig {
  field: string;
  label: string;
  placeholder: string;
  required?: boolean;
  validate?: (value: string) => string | null;
}

const TEXT_INPUT_CONFIG: TextInputConfig[] = [
  {
    field: 'name',
    label: 'Name',
    placeholder: 'Enter your name',
    required: true,
    validate: validateMinLength(1, 'Name'),
  },
  {
    field: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    validate: validateEmail,
  },
  {
    field: 'interests',
    label: 'Interests',
    placeholder: 'Enter your interests',
    validate: validateMinLength(3, 'Interests'),
  },
  {
    field: 'source',
    label: 'How did you hear about us?',
    placeholder: 'Enter your source',
    validate: validateMinLength(3, 'Source'),
  },
  {
    field: 'features',
    label: 'What features are you most interested in?',
    placeholder: 'Describe features',
    validate: validateMinLength(5, 'Features'),
  }
]

