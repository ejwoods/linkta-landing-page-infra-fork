import { z } from 'zod';
import {
  parseAndCleanInput,
  removeExtraWhiteSpaces,
  sanitizeAndTrimText,
} from '../utils/formInputSanitization';

const userDataSanitizationSchema = z.object({
  name: z.string().transform(removeExtraWhiteSpaces),
  email: z.string().trim().toLowerCase(),
  interests: z
    .string()
    .optional()
    .transform((input) =>
      input ? parseAndCleanInput(input) : []
    ),
  source: z
    .string()
    .optional()
    .transform((input) =>
      input
        ? sanitizeAndTrimText(input)
        : 'not provided'
    ),
  features: z
    .string()
    .optional()
    .transform((input) =>
      input ? parseAndCleanInput(input) : []
    ),
});

export type userDataSanitization = z.infer<typeof userDataSanitizationSchema>;

export default userDataSanitizationSchema;
