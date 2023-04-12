import { Markup } from '../../models';
import { MarkupRepository } from '../../repositories';

export class CreateMarkupService {
  constructor(private markupRepository: MarkupRepository) {}

  public async execute({
    name,
    lat,
    lng,
    tel,
    description,
    imageUrl,
  }: Omit<Markup, 'id' | 'createdAt' | 'updatedAt'>): Promise<Markup> {
    return this.markupRepository.create({
      name,
      lat,
      lng,
      tel,
      description,
      imageUrl,
    });
  }
}
