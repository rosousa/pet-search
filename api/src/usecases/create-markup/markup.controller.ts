import { Request, Response } from 'express';
import { CreateMarkupService } from './markup.service';
import { Markup } from '../../models';

export class CreateMarkupController {
  constructor(private createService: CreateMarkupService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { name, lat, lng, tel, description, imageUrl }: Markup = req.body;

    try {
      await this.createService.execute({
        name,
        lat,
        lng,
        tel,
        description,
        imageUrl,
      });

      return res.json({ message: 'markup created' });
    } catch (error) {
      return res.status(400).json({ message: 'invalid body' });
    }
  }
}
