import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  constructor(private userService: UserService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const session = await this.userService.execute({ email, password });
      res.cookie('auth_token', session.token, {
        httpOnly: true,
      });
      return res.json({ message: 'OK' });
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
