import { LoginDTO, RegisterDTO } from "../interfaces/userInterface";
import { apiServices, handleAxiosError } from "./apiServices";

const path: string = "/users";

export const loginUserService = async (loginData: LoginDTO) => {
  try {
    const response = await apiServices.post(`${path}/login`, loginData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Login Error");
  }
};

export const registerUserService = async (userdata: RegisterDTO) => {
  console.log(userdata);
  try {
    const response = await apiServices.post(`${path}/register`, userdata);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Error en el registro");
  }
};
