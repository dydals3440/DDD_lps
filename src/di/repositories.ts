import AxiosClient from '#/adapters/infrastructures/AxiosClient';
import LpRepository from '#/adapters/repositories/LpRepository';
import UserRepository from '#/adapters/repositories/UserRepository';
import IRepositories from '#/di/interfaces/IRepositories';

export default (baseUrl: string): IRepositories => {
  const axiosClient = new AxiosClient(baseUrl);

  return {
    lp: new LpRepository(axiosClient),
    user: new UserRepository(axiosClient),
  };
};
