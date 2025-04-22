import { Order } from "../entities/Order";

enum Role {
  ADMIN = "admin",
  USER = "user",
}

export interface SafeUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: Role;
  orders: Order[];
  credential: {
    id: number;
  };
}
