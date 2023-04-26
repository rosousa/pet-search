import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../../repositories';
import { SessionRepository } from '../../repositories/session.repository';

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private sessionRepository: SessionRepository
  ) {}

  async execute({ email, password }: { email: string; password: string }) {
    const user = await this.userRepository.get(email);

    if (!user) {
      throw new Error('E-mail or password is invalid');
    }

    const secret: string = process.env.JWT_SECRET!;
    const token = jwt.sign({ id: user.id }, secret);
    const passwordIsValid = bcrypt.compareSync(password, user?.passwordHash!);

    if (!passwordIsValid) {
      throw new Error('E-mail or password is invalid');
    }

    await this.sessionRepository.create({
      id: user.id,
      token,
    });

    return user;
  }
}
