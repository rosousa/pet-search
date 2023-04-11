import prisma from '../config/prisma';
import { logger } from '../logger';

const markups = [
  {
    name: 'Tom',
    lat: 51.505,
    lng: -0.09,
    tel: '55000000000',
    imageUrl:
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80',
  },
  {
    name: 'Max',
    lat: 41.505,
    lng: -5.09,
    tel: '55000000000',
    imageUrl:
      'https://images.unsplash.com/photo-1626736637845-53045bb9695b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80',
  },
  {
    name: 'Milo',
    lat: 31.505,
    lng: -15.09,
    tel: '55000000000',
    imageUrl:
      'https://images.unsplash.com/photo-1472053092455-ee16a8b358b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Bella',
    lat: 21.505,
    lng: -20.09,
    tel: '55000000000',
    imageUrl:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    name: 'Louie',
    lat: 11.505,
    lng: -25.09,
    tel: '55000000000',
    imageUrl:
      'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=601&q=80',
  },
];

export default async function createMarkupsSeed() {
  await prisma.$transaction(async (tx) => {
    const count = await tx.markup.count();

    if (count === 5) {
      return logger.info('Marcações já foram criados.');
    }

    logger.info('Apagando todas as marcações existentes...');
    await tx.markup.deleteMany();

    logger.info('Criando novas marcações...');
    await tx.markup.createMany({
      data: markups,
    });

    return logger.info(`Criadas ${markups.length} novas marcações.`);
  });
}
