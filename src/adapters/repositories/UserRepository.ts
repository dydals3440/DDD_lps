import UserDTO from '#/adapters/dtos/UserDTO';
import IAxiosClient from '#/adapters/infrastructures/interfaces/IAxiosClient';
import { IRequestUserSignUpParams } from '#/domains/aggregates/interfaces/IUser';
import IUserDTO, {
  SignupUserResponse,
} from '#/domains/dtos/interfaces/IUserDto';
import IUserRepository from '#/domains/repositories/interfaces/IUserRepository';

export default class UserRepository implements IUserRepository {
  private client: IAxiosClient;

  constructor(client: IAxiosClient) {
    this.client = client;
  }

  async signup(params: IRequestUserSignUpParams): Promise<IUserDTO> {
    console.log('signup', params);
    const { data } = await this.client.post<SignupUserResponse>(
      '/v1/auth/signup',
      params
    );

    return new UserDTO(data.data);
  }
}
