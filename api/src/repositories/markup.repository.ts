import prisma from '../config/prisma';
import { Markup } from '../models';

export class MarkupRepository {
  async get(): Promise<Markup[]> {
    return prisma.markup.findMany();
  }

  async create({ lat, lng }: Pick<Markup, 'lat' | 'lng'>) {
    return prisma.markup.create({
      data: {
        lat,
        lng,
      },
    });
  }
}
