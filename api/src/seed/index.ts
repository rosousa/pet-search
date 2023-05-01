import { logger } from '../logger';
import { createMarkupsSeed, createUsersSeed } from './markups.seed';

export async function runSeeds() {
  logger.info('Executando seeds...');
  await createUsersSeed();
  await createMarkupsSeed();
  logger.info('Seeds executadas com sucesso.');
}
