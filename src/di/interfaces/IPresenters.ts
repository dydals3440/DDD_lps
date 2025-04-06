import ILpPresenter from '#/adapters/presenters/interfaces/ILpPresenter';
import IUserPresenter from '#/adapters/presenters/interfaces/IUserPresenter';

export default interface IPresenters {
  lp: ILpPresenter;
  user: IUserPresenter;
}
