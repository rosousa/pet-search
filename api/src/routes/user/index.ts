import { Router } from 'express';
import { getUserController } from '../../usecases/get-user';
import { createUserController } from '../../usecases/create-user';

export const router = Router();

router.get('/user', async (req, res) => getUserController.handle(req, res));
router.post('/user', async (req, res) => createUserController.handle(req, res));
