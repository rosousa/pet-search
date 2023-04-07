import { Request, Response } from 'express';
import { MarkupService } from './markup.service';

export class GetMarkupController {
  constructor(private markupService: MarkupService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const markups = await this.markupService.execute();
    return res.json(markups);
  }
}
