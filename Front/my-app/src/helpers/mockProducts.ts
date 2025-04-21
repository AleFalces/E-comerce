interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  category: ICategory;
  stock: number;
}

export interface CardProps {
  product: IProduct; //
}
