import LpDTO from '#/adapters/dtos/LpDTO';
import IAxiosClient from '#/adapters/infrastructures/interfaces/IAxiosClient';
import ILpDTO from '#/domains/dtos/interfaces/ILpDto';
import ILpPaginationDTO from '#/domains/dtos/interfaces/ILpPaginationDto';
import ILpRepository from '#/domains/repositories/interfaces/ILpRepository';
import { APIResponse } from '#/shared/types/ApiResponse';
import { CursorPagination } from '#/shared/types/CursorPagination';

export default class LpRepository implements ILpRepository {
  private client: IAxiosClient;

  constructor(client: IAxiosClient) {
    this.client = client;
  }

  async getLps(): Promise<ILpPaginationDTO> {
    const { data } = await this.client.get<
      APIResponse<CursorPagination<ILpDTO>>
    >('/v1/lps');

    const { data: lps, hasNext, nextCursor } = data.data;

    return {
      data: lps.map((lp) => new LpDTO(lp)),
      hasNext,
      nextCursor,
    };
  }
}
