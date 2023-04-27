import { Request, Response } from 'express';
import { SessionService } from './session.service';
import { CookieKey } from '../../constants';

export class SessionController {
  constructor(private sessionService: SessionService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { [CookieKey.AuthToken]: authToken } = req.cookies;

    try {
      if (this.sessionService.execute(authToken)) {
        res.clearCookie(CookieKey.AuthToken);
        return res.json({ success: true });
      }
      return res.status(401).json({ success: false });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}
