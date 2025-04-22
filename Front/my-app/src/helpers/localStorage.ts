export const saveToken = (token: string) =>
  localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveCart = (cart: number[]) =>
  localStorage.setItem("cart", JSON.stringify(cart));

export const getCart = (): number[] => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};
