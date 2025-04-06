import ITagVO, { ITagVOParams } from '#/domains/vos/interfaces/ITagVO';

export default class TagVO implements ITagVO {
  readonly id: number;
  readonly userId: number;
  readonly lpId: number;

  constructor(params: ITagVOParams) {
    this.id = params.id;
    this.userId = params.userId;
    this.lpId = params.lpId;
  }
}
