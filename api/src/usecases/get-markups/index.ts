import { MarkupRepository } from '../../repositories';
import { MarkupService } from './markup.service';
import { GetMarkupController } from './markup.controller';

const markupRepository = new MarkupRepository();
const markupService = new MarkupService(markupRepository);
export const getMarkupController = new GetMarkupController(markupService);
