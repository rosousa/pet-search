import { z } from 'zod';

export const SignupSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, 'Username must have a minimum of 4 characters')
    .max(20),
  email: z.string().min(10).max(50).nonempty(),
  password: z
    .string()
    .nonempty()
    .min(4, 'Password must have a minimum of 4 characters')
    .max(50),
});
