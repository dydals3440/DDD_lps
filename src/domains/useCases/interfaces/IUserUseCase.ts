import IUser, {
  IRequestUserSignUpParams,
} from '#/domains/aggregates/interfaces/IUser';

export default interface IUserUseCase {
  signup(params: IRequestUserSignUpParams): Promise<IUser>;
}
