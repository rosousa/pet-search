import { UserRepository } from '../../repositories';
import { JwtService } from '../../utils/jwt-service';

export class SessionService {
  constructor(private userRepository: UserRepository) {}

  public execute(token: string) {
    try {
      const payload = JwtService.decrypt<{ userId: number }>(token);
      const user = this.userRepository.getData(payload.userId);

      if (!user) {
        return false;
      }

      return true;
    } catch (err) {
      throw new Error();
    }
  }
}
