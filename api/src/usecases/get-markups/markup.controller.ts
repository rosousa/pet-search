import { Request, Response } from 'express';
import { MarkupService } from './markup.service';
import { CookieKey } from '../../constants';

export class GetMarkupController {
  constructor(private markupService: MarkupService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { [CookieKey.AuthToken]: authToken } = req.cookies;

    try {
      const markups = await this.markupService.execute(authToken);
      return res.json(markups);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(401).json({ success: false });
      }
      return res.sendStatus(500);
    }
  }
}
