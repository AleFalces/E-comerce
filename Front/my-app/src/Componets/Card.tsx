"use client";
import { CardProps } from "@/helpers/mockProducts";
import { useCart } from "./CartContext";

export const Card: React.FC<CardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className="border-4 border-double p-2">
      <div>name: {product.name}</div>
      <div>price: ${product.price}</div>
      <div>{product.category.name}</div>
      <img src={product.image} alt={product.name} className="w-32 h-32" />

      <div>categoryId: {product.categoryId}</div>
      <div>stock: {product.stock}</div>

      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Card;
