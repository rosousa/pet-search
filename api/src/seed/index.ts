import { logger } from '../logger';
import createMarkupsSeed from './markups.seed';

async function runSeeds() {
  logger.info('Executando seeds...');
  await createMarkupsSeed();
  logger.info('Seeds executadas com sucesso.');
}

runSeeds();
