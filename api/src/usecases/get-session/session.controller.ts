import { Request, Response } from 'express';
import { SessionService } from './session.service';
import { CookieKey } from '../../constants';

export class SessionController {
  constructor(private sessionService: SessionService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { [CookieKey.AuthToken]: authToken } = req.cookies;

    try {
      const userData = await this.sessionService.execute(authToken);
      return res.json({ sucess: true, user: userData });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(401).json({ success: false });
      }
      return res.sendStatus(500);
    }
  }
}
