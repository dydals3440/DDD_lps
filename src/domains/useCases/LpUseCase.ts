import Lp from '#/domains/aggregates/Lp';
import ILpRepository from '#/domains/repositories/interfaces/ILpRepository';
import ILpPaginationResult from '#/domains/useCases/interfaces/ILpPaginationResult';
import ILpUseCase from '#/domains/useCases/interfaces/ILpUseCase';

export default class LpUseCase implements ILpUseCase {
  private lpRepository: ILpRepository;

  constructor(lpRepository: ILpRepository) {
    this.lpRepository = lpRepository;
  }

  async getLps(): Promise<ILpPaginationResult> {
    const lps = await this.lpRepository.getLps();

    return {
      data: lps.data.map((lp) => new Lp(lp)),
      nextCursor: lps.nextCursor,
      hasNext: lps.hasNext,
    };
  }
}
