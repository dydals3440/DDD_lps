import IUser, {
  IRequestUserSignUpParams,
} from '#/domains/aggregates/interfaces/IUser';

export default interface IUserPresenter {
  signup(params: IRequestUserSignUpParams): Promise<IUser>;
}
