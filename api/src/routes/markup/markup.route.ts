import { Router } from 'express';
import { getMarkupController } from '../../usecases/get-markups';

export const router = Router();

router.get('/markup', async (req, res) => getMarkupController.handle(req, res));
