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
    <div className="border-4 border-double p-2 rounded shadow-md hover:shadow-lg transition duration-300">
      <div className="text-lg font-semibold">{product.name}</div>
      <div className="text-gray-700">Precio: ${product.price}</div>
      <div className="text-sm text-gray-500">{product.category.name}</div>
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover my-2 rounded"
      />
      <div className="text-sm text-gray-600 mb-2">
        Stock disponible: {remainingStock}
      </div>

      <div className="flex gap-2 mt-2">
        <button
          onClick={handleAddToCart}
          className={`px-3 py-1 rounded text-white transition ${
            remainingStock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Agregar al carrito
        </button>

        <button
          onClick={() => router.push(`/products/${product.id}`)}
          className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default Card;
