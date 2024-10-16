import { UserRolesEnum } from "../../../types/user.types";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: UserRolesEnum;
  avatar?: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  role: UserRolesEnum;
  password: string;
  confirm_password: string;
}

export interface IUpdateUser extends Partial<IUser> {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}
