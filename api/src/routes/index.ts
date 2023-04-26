import { Router } from 'express';
import { router as markupRouter } from './markup';
import { router as userRouter } from './user';

export const router = Router();

router.use('/api', markupRouter);
router.use('/api', userRouter);
