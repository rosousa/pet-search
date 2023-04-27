import { MarkupRepository } from '../../repositories';
import { SessionRepository } from '../../repositories/session.repository';
import { MarkupService } from './markup.service';
import { GetMarkupController } from './markup.controller';

const markupRepository = new MarkupRepository();
const sessionRepository = new SessionRepository();
const markupService = new MarkupService(markupRepository, sessionRepository);
export const getMarkupController = new GetMarkupController(markupService);
