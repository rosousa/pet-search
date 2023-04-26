import bcrypt from 'bcrypt';
import { UserRepository } from '../../repositories';

type Credentials = {
  username: string;
  email: string;
  password: string;
};

export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async execute({ username, email, password }: Credentials) {
    const user = await this.userRepository.get(email);

    if (user) throw new Error('A user with this e-mail already exists');

    const passwordHash = bcrypt.hashSync(password, 4);

    await this.userRepository.create({
      username,
      email,
      passwordHash,
    });
  }
}
