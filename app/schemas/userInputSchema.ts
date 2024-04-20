import { z } from 'zod';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[\p{Letter}\s\-.']+$/u;

const userInputSchema = z.object({
  name: z
    .string()
    .trim()
    .max(50, { message: 'Name can be up to 50 characters.' })
    .refine((val) => val.length > 50 || nameRegex.test(val), {
      message:
        'Looks like your name contains some special characters. Could you check it again?',
    }),
  email: z
    .string()
    .trim()
    .min(6, {
      message: 'Hmm, that email seems a bit short. Could you check it again?',
    })
    .max(254, { message: 'Email can be up to 254 characters.' })
    .refine((val) => val.length > 254 || emailRegex.test(val), {
      message:
        'Oops, the email address seems incorrect. Could you check it again?',
    }),
  interests: z.string().optional(),
  source: z.string().optional(),
  features: z.string().optional(),
});

export type FormValues = z.infer<typeof userInputSchema>;

export default userInputSchema;
