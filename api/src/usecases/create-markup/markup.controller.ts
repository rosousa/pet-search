import { Request, Response } from 'express';
import { CreateMarkupService } from './markup.service';
import { Markup } from '../../models';
import { CookieKey } from '../../constants';

export class CreateMarkupController {
  constructor(private createService: CreateMarkupService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { [CookieKey.AuthToken]: authToken } = req.cookies;
    const { name, lat, lng, tel, description, imageUrl }: Markup = req.body;

    try {
      await this.createService.execute(
        {
          name,
          lat,
          lng,
          tel,
          description,
          imageUrl,
        },
        authToken
      );

      return res.json({ success: true });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ success: false });
      }
      return res.sendStatus(500);
    }
  }
}
