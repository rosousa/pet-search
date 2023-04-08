import { Markup } from '../../models';
import { MarkupRepository } from '../../repositories';

export class CreateMarkupService {
  constructor(private markupRepository: MarkupRepository) {}

  public async execute({
    lat,
    lng,
  }: Pick<Markup, 'lat' | 'lng'>): Promise<any> {
    return this.markupRepository.create({ lat, lng });
  }
}
