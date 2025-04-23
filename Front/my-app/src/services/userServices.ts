import { ILoginDTO, IRegisterDTO } from "../interfaces/userInterface";
import { apiServices, handleAxiosError } from "./apiServices";

const path: string = "/users";

export const loginUserService = async (loginData: ILoginDTO) => {
  try {
    const response = await apiServices.post(`${path}/login`, loginData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Login Error");
  }
};

export const registerUserService = async (userdata: IRegisterDTO) => {
  try {
    const response = await apiServices.post(`${path}/register`, userdata);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Error en el registro");
  }
};

export const getUserOrders = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await apiServices.post(`${path}/orders`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Orders error");
  }
};
