import { IOrder } from "./orderInterface";

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IRegisterDTO {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  Cpassword: string;
}

export interface ILoginFormErrorsDto {
  email?: string;
  password?: string;
}

export interface IRegisterErrors {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  password?: string;
  Cpassword?: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  orders: IOrder[];
}
