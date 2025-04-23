import { IOrdernDTO } from "@/interfaces/orderInterface";
import { apiServices, handleAxiosError } from "./apiServices";

export const orderService = async (orderProducts: IOrdernDTO) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  console.log(token, orderProducts);
  try {
    const response = await apiServices.post("/orders", orderProducts);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "error when reserving your order");
  }
};
