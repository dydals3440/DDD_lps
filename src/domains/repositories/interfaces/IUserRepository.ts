import { IRequestUserSignUpParams } from '#/domains/aggregates/interfaces/IUser';
import IUserDTO from '#/domains/dtos/interfaces/IUserDto';

export default interface IUserRepository {
  signup(params: IRequestUserSignUpParams): Promise<IUserDTO>;
}
