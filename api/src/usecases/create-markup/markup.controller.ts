import { Request, Response } from 'express';
import { CreateMarkupService } from './markup.service';

export class CreateMarkupController {
  constructor(private createService: CreateMarkupService) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const { lat, lng }: { lat: number; lng: number } = req.body;

    try {
      await this.createService.execute({ lat, lng });

      return res.json({ message: 'markup created' });
    } catch (error) {
      return res.status(400).json({ message: 'invalid body' });
    }
  }
}
