import { UserRepository } from '../../repositories';
import { SessionRepository } from '../../repositories/session.repository';
import { JwtService } from '../../utils/jwt-service';

export class SessionService {
  constructor(
    private sessionRepository: SessionRepository,
    private userRepository: UserRepository
  ) {}

  public async execute(token: any) {
    try {
      const payload = JwtService.decrypt<{ userId: number }>(token);
      const session = this.sessionRepository.getSession(payload.userId);

      if (!session) {
        throw new Error('No session');
      }

      const user = await this.userRepository.getData(payload.userId);

      if (!user) {
        throw new Error('No user');
      }

      return {
        ...user,
      };
    } catch (err) {
      throw new Error();
    }
  }
}
