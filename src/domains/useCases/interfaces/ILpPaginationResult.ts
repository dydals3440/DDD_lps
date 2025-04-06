import ILp from '#/domains/aggregates/interfaces/ILp';

export default interface ILpPaginationResult {
  data: ILp[];
  nextCursor: number | null;
  hasNext: boolean;
}
