import { UserRepository } from '../../repositories';
import { SessionRepository } from '../../repositories/session.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';

const userRepository = new UserRepository();
const sessionRepository = new SessionRepository();
const userService = new UserService(userRepository, sessionRepository);
export const getUserController = new UserController(userService);
