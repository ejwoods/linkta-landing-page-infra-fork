import { z } from 'zod';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[\p{Letter}\s\-.']+$/u;

const userInputSchema = z.object({
  name: z
    .string()
    .trim()
    .max(50, { message: 'Name must be no more than 50 characters long.' })
    .refine((val) => val.length > 50 || nameRegex.test(val), {
      message:
        "First name can only contain letters from any language, whitespace characters, hyphens (-), periods (.), apostrophes ('), and right single quotation marks ('). Please remove any other characters and try again.",
    }),
  email: z
    .string()
    .trim()
    .min(6, {
      message: 'Email must have at least 6 letters. Please try again.',
    })
    .max(254, { message: 'Email must be no more than 254 characters long.' })
    .refine((val) => val.length > 254 || emailRegex.test(val), {
      message:
        'Email address can only contain letters, digits, periods (.), and special characters in the username, followed by (@) and a domain name or IP address.',
    }),
  interests: z.string().optional(),
  source: z.string().optional(),
  features: z.string().optional(),
});

export type FormValues = z.infer<typeof userInputSchema>;

export default userInputSchema;
