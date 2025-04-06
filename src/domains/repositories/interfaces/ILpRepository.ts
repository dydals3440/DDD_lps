import ILpPaginationDTO from '#/domains/dtos/interfaces/ILpPaginationDto';

export default interface ILpRepository {
  getLps(): Promise<ILpPaginationDTO>;
}
