import IUserDTO from '#/domains/dtos/interfaces/IUserDto';

export default class UserDTO implements IUserDTO {
  id: number;
  name: string;
  email: string;
  password: string;
  bio: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: IUserDTO) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
    this.bio = params.bio;
    this.avatar = params.avatar;
    this.createdAt = new Date(params.createdAt);
    this.updatedAt = new Date(params.updatedAt);
  }
}
