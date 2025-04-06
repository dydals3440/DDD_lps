import ILp, { ILpParams } from '#/domains/aggregates/interfaces/ILp';
import ILikeVO from '#/domains/vos/interfaces/ILikeVO';
import ITagVO from '#/domains/vos/interfaces/ITagVO';

export default class Lp implements ILp {
  readonly id: number;
  title: string;
  content: string;
  thumbnail: string;
  published: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  likes: ILikeVO[];
  tags: ITagVO[];

  constructor(params: ILpParams) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.thumbnail = params.thumbnail;
    this.published = params.published;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
    this.likes = params.likes;
    this.tags = params.tags;
  }
}
