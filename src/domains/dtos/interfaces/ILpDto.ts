import ILikeVO from '#/domains/vos/interfaces/ILikeVO';
import ITagVO from '#/domains/vos/interfaces/ITagVO';

export default interface ILpDTO {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly thumbnail: string;
  readonly published: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  likes: ILikeVO[];
  tags: ITagVO[];
}
