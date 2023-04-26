import prisma from '../config/prisma';
import User from '../models/user';

export class UserRepository {
  async get(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create({
    username,
    email,
    passwordHash,
  }: Pick<User, 'username' | 'email' | 'passwordHash'>) {
    return prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
      },
    });
  }
}
