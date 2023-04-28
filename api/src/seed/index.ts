import { logger } from '../logger';
import { createMarkupsSeed, createUsersSeed } from './markups.seed';

async function runSeeds() {
  logger.info('Executando seeds...');
  await createUsersSeed();
  await createMarkupsSeed();
  logger.info('Seeds executadas com sucesso.');
}

runSeeds();
