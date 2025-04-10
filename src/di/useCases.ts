import IRepositories from '#/di/interfaces/IRepositories';
import IUseCases from '#/di/interfaces/IUseCases';
import LpUseCase from '#/domains/useCases/LpUseCase';
import UserUseCase from '#/domains/useCases/UserUseCase';

export default (repository: IRepositories): IUseCases => {
  return {
    // 필요시 LpUseCase(repository.lp, repository.comment)
    lp: new LpUseCase(repository.lp),
    user: new UserUseCase(repository.user),
  };
};
