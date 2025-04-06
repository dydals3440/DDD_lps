import ILpPresenter from '#/adapters/presenters/interfaces/ILpPresenter';
import ILpPaginationDTO from '#/domains/dtos/interfaces/ILpPaginationDto';
import ILpUseCase from '#/domains/useCases/interfaces/ILpUseCase';

export default class LpPresenter implements ILpPresenter {
  private lpUseCase: ILpUseCase;

  constructor(lpUseCase: ILpUseCase) {
    this.lpUseCase = lpUseCase;
  }

  async getLps(): Promise<ILpPaginationDTO> {
    return await this.lpUseCase.getLps();
  }
}
