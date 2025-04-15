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
  try {
    const response = await apiServices.post(`${path}/register`, userdata);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Error en el registro");
  }
};

export const getUserOrders = async (userId: number) => {
  try {
    const response = await apiServices.post(`${path}/orders`, userId);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Orders error");
  }
};
