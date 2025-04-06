import ILpUseCase from '#/domains/useCases/interfaces/ILpUseCase';
import IUserUseCase from '#/domains/useCases/interfaces/IUserUseCase';

export default interface IUseCases {
  lp: ILpUseCase;
  user: IUserUseCase;
}
