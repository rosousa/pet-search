import { MarkupRepository } from '../../repositories';
import { CreateMarkupService } from './markup.service';
import { CreateMarkupController } from './markup.controller';

const markupRepository = new MarkupRepository();
const createMarkupService = new CreateMarkupService(markupRepository);
export const createMarkupController = new CreateMarkupController(
  createMarkupService
);
