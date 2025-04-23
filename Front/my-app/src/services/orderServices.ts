import { IOrdernDTO } from "@/interfaces/orderInterface";
import { apiServices, handleAxiosError } from "./apiServices";

export const orderService = async (orderProducts: IOrdernDTO) => {
  const token = localStorage.getItem("token");
  try {
    const response = await apiServices.post("/orders", orderProducts, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, "error when reserving your order");
  }
};
