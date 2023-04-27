import { Markup } from '../../models';
import { MarkupRepository } from '../../repositories';
import { SessionRepository } from '../../repositories/session.repository';
import { JwtService } from '../../utils/jwt-service';

export class CreateMarkupService {
  constructor(
    private markupRepository: MarkupRepository,
    private sessionRepository: SessionRepository
  ) {}

  public async execute(
    {
      name,
      lat,
      lng,
      tel,
      description,
      imageUrl,
    }: Omit<Markup, 'id' | 'userId' | 'createdAt' | 'updatedAt'>,
    token: string
  ): Promise<Markup> {
    const payload = JwtService.decrypt<{ userId: number }>(token);
    const session = await this.sessionRepository.getSession(payload.userId);

    if (!session) {
      throw new Error('No session');
    }

    return this.markupRepository.create({
      name,
      userId: payload.userId,
      lat,
      lng,
      tel,
      description,
      imageUrl,
    });
  }
}
