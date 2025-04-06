import ILikeVO from '#/domains/vos/interfaces/ILikeVO';
import ITagVO from '#/domains/vos/interfaces/ITagVO';

// LP 한개의 완전한 상태
export default interface ILp {
  readonly id: number;
  title: string;
  content: string;
  thumbnail: string;
  published: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  likes: ILikeVO[];
  tags: ITagVO[];
}

// ILp를 만들기 위한, 생성용 파라미터 new Lp({ ... })의 파라미터
export interface ILpParams {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly thumbnail: string;
  readonly published: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly likes: ILikeVO[];
  readonly tags: ITagVO[];
}

// client -> server (생성 수정)
export interface IRequestPostParams {
  readonly title: string;
  readonly content: string;
  readonly thumbnail: string;
  readonly published: boolean;
  readonly likes: ILikeVO[];
  readonly tags: ITagVO[];
}
