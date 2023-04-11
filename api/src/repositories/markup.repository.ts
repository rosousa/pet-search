import prisma from '../config/prisma';
import { Markup } from '../models';

export class MarkupRepository {
  async get(): Promise<Markup[]> {
    return prisma.markup.findMany();
  }

  async create({
    name,
    lat,
    lng,
    tel,
    imageUrl,
  }: Pick<Markup, 'name' | 'lat' | 'lng' | 'tel' | 'imageUrl'>) {
    return prisma.markup.create({
      data: {
        name,
        lat,
        lng,
        tel,
        imageUrl,
      },
    });
  }
}
