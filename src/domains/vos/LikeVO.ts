import ILikeVO, { ILikeVOParams } from '#/domains/vos/interfaces/ILikeVO';

export default class LikeVO implements ILikeVO {
  readonly id: number;
  readonly name: string;

  constructor(params: ILikeVOParams) {
    this.id = params.id;
    this.name = params.name;
  }
}
