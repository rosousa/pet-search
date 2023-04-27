import { Request, Response } from 'express';
import { UserService } from './user.service';
import { CookieKey } from '../../constants';

export class UserController {
  constructor(private userService: UserService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const { user, session } = await this.userService.execute({
        email,
        password,
      });
      res.cookie(CookieKey.AuthToken, session.token, {
        httpOnly: true,
      });
      return res.json({
        sucess: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (err) {
      if (
        err instanceof Error &&
        err.message === 'E-mail or password is invalid'
      ) {
        return res.status(401).json({ message: err.message });
      }
      return res.sendStatus(500);
    }
  }
}
