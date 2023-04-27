import prisma from '../config/prisma';

export class SessionRepository {
  public async create({ id, token }: { id: number; token: string }) {
    return prisma.userSession.create({
      data: {
        userId: id,
        token,
      },
    });
  }

  public async getSession(userId: number) {
    return prisma.userSession.count({
      where: {
        userId,
      },
    });
  }
}
