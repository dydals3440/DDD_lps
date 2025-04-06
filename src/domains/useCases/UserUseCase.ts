import IUser, {
  IRequestUserSignUpParams,
} from '#/domains/aggregates/interfaces/IUser';
import User from '#/domains/aggregates/User';
import IUserRepository from '#/domains/repositories/interfaces/IUserRepository';
import IUserUseCase from '#/domains/useCases/interfaces/IUserUseCase';

export default class UserUseCase implements IUserUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async signup(params: IRequestUserSignUpParams): Promise<IUser> {
    const user = await this.userRepository.signup(params);

    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      bio: user.bio,
      avatar: user.avatar,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
