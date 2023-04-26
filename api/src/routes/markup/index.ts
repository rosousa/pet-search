import { Router } from 'express';
import { getMarkupController } from '../../usecases/get-markups';
import { createMarkupController } from '../../usecases/create-markup';

export const router = Router();

router.get('/markup', async (req, res) => getMarkupController.handle(req, res));
router.post('/markup', async (req, res) =>
  createMarkupController.handle(req, res)
);
