export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  Cpassword: string;
}

export interface LoginFormErrorsDto {
  email?: string;
  password?: string;
}

export interface RegisterErrors {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  password?: string;
  Cpassword?: string;
}
