import prisma from '../config/prisma';

export class MarkupRepository {
  async get() {
    return prisma.markup.findMany();
  }
}
