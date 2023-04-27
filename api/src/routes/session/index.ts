import { Router } from 'express';
import { sessionController } from '../../usecases/get-session';
import { logoutController } from '../../usecases/remove-session';

export const router = Router();

router.get('/session', async (req, res) => sessionController.handle(req, res));
router.get('/logout', async (req, res) => logoutController.handle(req, res));
