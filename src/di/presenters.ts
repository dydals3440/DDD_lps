import LpPresenter from '#/adapters/presenters/LpPresenter';
import IPresenters from '#/di/interfaces/IPresenters';
import IUseCases from '#/di/interfaces/IUseCases';

export default (useCases: IUseCases): IPresenters => {
  return {
    lp: new LpPresenter(useCases.lp),
  };
};
