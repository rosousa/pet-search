import { MarkupRepository } from '../../repositories';

export class MarkupService {
  constructor(private markupRepository: MarkupRepository) {}

  async execute() {
    const markups = await this.markupRepository.get();
    return markups;
  }
}
