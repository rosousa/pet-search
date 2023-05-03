import { z } from 'zod';
import validator from 'validator';

export const MarkupSchema = z.object({
  tel: z.string().min(11).max(11).refine(validator.isMobilePhone),
  description: z.string().trim().min(20, 'Description is too short').max(200),
  imageURL: z
    .string()
    .trim()
    .url('Invalid image URL')
    .min(20, 'URL must be at least 20 characters long')
    .max(300),
});
