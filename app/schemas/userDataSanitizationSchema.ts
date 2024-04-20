import { z } from 'zod';
import { ALLOWED_COMMON_CHARS, parseAndCleanInput, removeExtraWhiteSpaces, removeSpecialCharacters } from '../utils/formInputSanitization';

const userDataSanitizationSchema = z.object({
  name: z.string().transform(removeExtraWhiteSpaces),
  email: z.string().trim().toLowerCase(),
  interests: z
    .string()
    .optional()
    .transform((input) =>
      input ? parseAndCleanInput(input, ALLOWED_COMMON_CHARS) : []
    ),
  source: z
    .string()
    .optional()
    .transform((input) =>
      input
        ? removeSpecialCharacters(input, ALLOWED_COMMON_CHARS)
        : 'not provided'
    ),
  features: z
    .string()
    .optional()
    .transform((input) =>
      input ? parseAndCleanInput(input, ALLOWED_COMMON_CHARS) : []
    ),
});

export type userDataSanitization = z.infer<typeof userDataSanitizationSchema>;

export default userDataSanitizationSchema;
