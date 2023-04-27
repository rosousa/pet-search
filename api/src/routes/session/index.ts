import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../../config/prisma';
import { CookieKey } from '../../constants';

export const router = Router();

router.get('/session', (req: Request, res: Response) => {
  const { [CookieKey.AuthToken]: authToken } = req.cookies;

  try {
    const secret = String(process.env.JWT_SECRET);
    jwt.verify(authToken, secret, async (err: any, decoded: any) => {
      if (
        !err &&
        (await prisma.user.count({
          where: {
            id: decoded.id,
          },
        }))
      ) {
        return res.json({ sucess: true });
      }
      return res.json({ sucess: false });
    });
  } catch (error) {
    return res.sendStatus(500);
  }

  return res.sendStatus(500);
});
