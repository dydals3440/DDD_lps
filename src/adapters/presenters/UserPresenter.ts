import IUserPresenter from '#/adapters/presenters/interfaces/IUserPresenter';
import { IRequestUserSignUpParams } from '#/domains/aggregates/interfaces/IUser';
import IUserUseCase from '#/domains/useCases/interfaces/IUserUseCase';

export default class UserPresenter implements IUserPresenter {
  private userUseCase: IUserUseCase;

  constructor(userUseCase: IUserUseCase) {
    this.userUseCase = userUseCase;
  }

  async signup(params: IRequestUserSignUpParams) {
    return await this.userUseCase.signup(params);
  }
}
