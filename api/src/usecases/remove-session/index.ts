import { UserRepository } from '../../repositories';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';

const userRepository = new UserRepository();
const sessionService = new SessionService(userRepository);
export const logoutController = new SessionController(sessionService);
