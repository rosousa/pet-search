import { MarkupRepository } from '../../repositories';
import { SessionRepository } from '../../repositories/session.repository';
import { JwtService } from '../../utils/jwt-service';

export class MarkupService {
  constructor(
    private markupRepository: MarkupRepository,
    private sessionRepository: SessionRepository
  ) {}

  async execute(token: string) {
    const payload = JwtService.decrypt<{ userId: number }>(token);
    const session = this.sessionRepository.getSession(payload.userId);

    if (!session) {
      throw new Error('No session');
    }

    const markups = await this.markupRepository.get();
    return markups;
  }
}
