import AxiosClient from '#/adapters/infrastructures/AxiosClient';
import LpRepository from '#/adapters/repositories/LpRepository';
import IRepositories from '#/di/interfaces/IRepositories';

export default (baseUrl: string): IRepositories => {
  const axiosClient = new AxiosClient(baseUrl);

  return {
    lp: new LpRepository(axiosClient),
  };
};
