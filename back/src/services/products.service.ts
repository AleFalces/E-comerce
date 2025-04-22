import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find({
    relations: ["category"],
  });
};

export const getProductsByIdService = async (
  id: number
): Promise<Product | null> => {
  return await ProductRepository.findOne({
    where: { id: id },
    relations: ["category"],
  });
};
