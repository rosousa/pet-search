import prisma from '../src/config/prisma';
import { logger } from '../src/logger';

const users = [
  {
    username: 'William Smith',
    email: 'williamsmith@email.com',
    passwordHash: 'example',
  },
  {
    username: 'Elizabeth Taylor',
    email: 'elizabethtaylor@email.com',
    passwordHash: 'example',
  },
  {
    username: 'James Wilson',
    email: 'jameswilson@email.com',
    passwordHash: 'example',
  },
];

const markups = [
  {
    name: 'William Smith',
    userId: 1,
    lat: 51.52065502929,
    lng: -0.08863091468811037,
    tel: '11223344556',
    description: 'Lorem ipsum dolor sit amet veniam.',
    imageUrl:
      'https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/20164/308225/heroimage0.288665001627055597.jpg',
  },
  {
    name: 'Elizabeth Taylor',
    userId: 2,
    lat: 51.52091112689193,
    lng: -0.09108782205178745,
    tel: '11223344556',
    description: 'Lorem ipsum dolor sit amet veniam.',
    imageUrl:
      'https://www.thesprucepets.com/thmb/z9TGzAZLVjA6hYMLr0RrDmawfeY=/3119x0/filters:no_upscale():strip_icc()/GettyImages-107109200-0a22adeba60548d0bd0c51ef55123546.jpg',
  },
  {
    name: 'James Wilson',
    userId: 3,
    lat: 51.51974581732406,
    lng: -0.09108159933194805,
    tel: '11223344556',
    description: 'Lorem ipsum dolor sit amet veniam.',
    imageUrl:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F04%2Fwhite-samoyed-field-flowers-997016774-2000.jpg',
  },
];

export async function createMarkupsSeed() {
  await prisma.$transaction(async (tx) => {
    const count = await tx.markup.count();

    if (count === markups.length) {
      return logger.info('As marcações já foram criados.');
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

export async function createUsersSeed() {
  await prisma.$transaction(async (tx) => {
    const count = await tx.user.count();

    if (count === users.length) {
      return logger.info('Os usuários já foram criados');
    }

    logger.info('Apagando todos os usuários existesntes...');
    await tx.user.deleteMany();

    logger.info('Criando novos usuários...');
    await tx.user.createMany({
      data: users,
    });

    return logger.info(`Criados ${users.length} novos usuários.`);
  });
}

createUsersSeed();
createMarkupsSeed();
