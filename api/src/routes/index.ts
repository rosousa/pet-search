import { Router } from 'express';
import { router as markupRouter } from './markup/markup.route';

export const router = Router();

router.use('/api', markupRouter);
