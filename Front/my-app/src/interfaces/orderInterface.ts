export interface IOrdernDTO {
  products: number[];
}

interface IProduct {
  categoryId: number;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  stock: number;
}

export interface IOrder {
  id: number;
  status: string;
  date: string;
  products: IProduct[];
}
