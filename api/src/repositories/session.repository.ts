import prisma from '../config/prisma';

export class SessionRepository {
  public async create({ id, token }: { id: number; token: string }) {
    await prisma.userSession.create({
      data: {
        userId: id,
        token,
      },
    });
  }
}
