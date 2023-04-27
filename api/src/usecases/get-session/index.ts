import { SessionRepository } from '../../repositories/session.repository';
import { UserRepository } from '../../repositories';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';

const sessionRepository = new SessionRepository();
const userRepository = new UserRepository();
const sessionService = new SessionService(sessionRepository, userRepository);
export const sessionController = new SessionController(sessionService);
