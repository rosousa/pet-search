import prisma from '../config/prisma';
import { User } from '../models';

export class UserRepository {
  async get(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getData(id: number) {
    return prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        email: true,
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
