import { MarkupRepository, SessionRepository } from '../../repositories';
import { CreateMarkupService } from './markup.service';
import { CreateMarkupController } from './markup.controller';

const markupRepository = new MarkupRepository();
const sessionRepository = new SessionRepository();
const createMarkupService = new CreateMarkupService(
  markupRepository,
  sessionRepository
);
export const createMarkupController = new CreateMarkupController(
  createMarkupService
);
