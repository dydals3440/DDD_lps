import ILpPaginationDTO from '#/domains/dtos/interfaces/ILpPaginationDto';

export default interface ILpPresenter {
  getLps(): Promise<ILpPaginationDTO>;
}
