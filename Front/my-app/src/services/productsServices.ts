import { apiServices, handleAxiosError } from "./apiServices";

const path: string = "/products";

export const getAllProducts = async () => {
  try {
    const response = await apiServices.get(`${path}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Error to get products");
  }
};
