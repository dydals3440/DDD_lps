import { APIResponse } from '#/shared/types/ApiResponse';

export default interface IUserDTO {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly bio: string;
  readonly avatar: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export type SignupUserResponse = APIResponse<IUserDTO>;
