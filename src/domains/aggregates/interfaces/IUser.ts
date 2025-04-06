export default interface IUser {
  readonly id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface IUserParams {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly bio: string;
  readonly avatar: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface IRequestUserSignUpParams {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly bio: string;
  readonly avatar: string;
}
