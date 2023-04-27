import prisma from '../config/prisma';
import { Markup } from '../models';

export class MarkupRepository {
  async get(): Promise<Markup[]> {
    return prisma.markup.findMany();
  }

  async create({
    name,
    userId,
    lat,
    lng,
    tel,
    description,
    imageUrl,
  }: Omit<Markup, 'id' | 'updatedAt' | 'createdAt'>) {
    return prisma.markup.create({
      data: {
        name,
        userId,
        lat,
        lng,
        tel,
        description,
        imageUrl,
      },
    });
  }
}
