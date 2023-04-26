import { Router } from 'express';
import { getUserController } from '../../usecases/get-user';
import { createUserController } from '../../usecases/create-user';

export const router = Router();

router.post('/sign-in', async (req, res) => getUserController.handle(req, res));
router.post('/sign-up', async (req, res) =>
  createUserController.handle(req, res)
);
