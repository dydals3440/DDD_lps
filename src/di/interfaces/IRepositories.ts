import ILpRepository from '#/domains/repositories/interfaces/ILpRepository';
import IUserRepository from '#/domains/repositories/interfaces/IUserRepository';

export default interface IRepositories {
  // Define your repository interfaces here
  lp: ILpRepository;
  user: IUserRepository;
}
