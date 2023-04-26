import { UserRepository } from '../../repositories';
import { UserService } from './user.service';
import { UserController } from './user.controller';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
export const createUserController = new UserController(userService);
