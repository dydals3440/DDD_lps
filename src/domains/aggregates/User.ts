import IUser, { IUserParams } from '#/domains/aggregates/interfaces/IUser';

export default class User implements IUser {
  readonly id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(params: IUserParams) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.bio = params.bio;
    this.avatar = params.avatar;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}
