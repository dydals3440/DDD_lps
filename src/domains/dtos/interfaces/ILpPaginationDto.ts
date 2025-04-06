import ILpDTO from './ILpDto';

export default interface ILpPaginationDTO {
  data: ILpDTO[];
  nextCursor: number | null;
  hasNext: boolean;
}
