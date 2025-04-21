import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  getProductsByIdService,
  getProductsService,
} from "../services/products.service";
import { Product } from "../entities/Product";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductsById = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const numberid = Number(id);
    const products: Product | null = await getProductsByIdService(numberid);
    res.json(products);
  }
);
