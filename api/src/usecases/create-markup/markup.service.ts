import { Markup } from '../../models';
import { MarkupRepository } from '../../repositories';

export class CreateMarkupService {
  constructor(private markupRepository: MarkupRepository) {}

  public async execute({
    name,
    lat,
    lng,
    tel,
    imageUrl,
  }: Pick<
    Markup,
    'name' | 'lat' | 'lng' | 'tel' | 'imageUrl'
  >): Promise<Markup> {
    return this.markupRepository.create({ name, lat, lng, tel, imageUrl });
  }
}
