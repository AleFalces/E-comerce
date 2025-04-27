"use client";

import { CardProps } from "@/helpers/mockProducts";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const Card: React.FC<CardProps> = ({ product }) => {
  const { addToCart, getRemainingStock } = useCart();
  const router = useRouter();

  const remainingStock = getRemainingStock(product.id, product.stock);

  const handleAddToCart = () => {
    if (remainingStock === 0) {
      toast.error("No hay suficiente stock disponible");
      return;
    }

    addToCart(product.id, product.stock);
    toast.success("Producto agregado al carrito");
  };

  return (
    <div className="bg-amber-100 border-4 border-yellow-700 rounded-xl shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-sm duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-semibold text-red-800 mb-2">
        {product.name}
      </h2>
      <p className="text-base text-yellow-700 mb-1">Precio: ${product.price}</p>
      <p className="text-sm text-red-800 mb-2">{product.category.name}</p>
      <p className="text-sm text-yellow-700 mb-4">
        Stock disponible: {remainingStock}
      </p>
      <div className="flex gap-3 mb-4">
        <button
          onClick={handleAddToCart}
          className={`px-4 py-2 rounded-xl font-semibold text-amber-100 transition-colors duration-300 ${
            remainingStock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-800 hover:bg-green-800"
          }`}
        >
          Agregar al carrito
        </button>
        <button
          onClick={() => router.push(`/products/${product.id}`)}
          className="bg-yellow-700 hover:bg-green-800 text-amber-100 px-4 py-2 rounded-xl font-semibold transition-colors duration-300"
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default Card;
