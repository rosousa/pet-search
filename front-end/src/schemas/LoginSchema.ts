import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().min(10).max(50).nonempty(),
  password: z
    .string()
    .nonempty()
    .min(4, 'Password must have a minimum of 4 characters')
    .max(50),
});
