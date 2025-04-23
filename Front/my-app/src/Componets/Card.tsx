"use client";

import { CardProps } from "@/helpers/mockProducts";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";

export const Card: React.FC<CardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleGoToDetail = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="border-4 border-double p-2">
      <div>name: {product.name}</div>
      <div>price: ${product.price}</div>
      <div>{product.category.name}</div>
      <img src={product.image} alt={product.name} className="w-40 h-40" />

      <div>categoryId: {product.categoryId}</div>
      <div>stock: {product.stock}</div>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => addToCart(product.id, product.stock)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Agregar al carrito
        </button>

        <button
          onClick={handleGoToDetail}
          className="bg-gray-700 text-white px-3 py-1 rounded"
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default Card;
