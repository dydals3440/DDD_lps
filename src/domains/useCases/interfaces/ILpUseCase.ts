import ILpPaginationResult from '#/domains/useCases/interfaces/ILpPaginationResult';

export default interface ILpUseCase {
  getLps(): Promise<ILpPaginationResult>;
}
