"use client";

import { getProductsById } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/Componets/CartContext";

const IdProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { addToCart, getRemainingStock } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (typeof id === "string") {
      getProductsById(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const remainingStock = getRemainingStock(product.id, product.stock);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.image && <img src={product.image} alt={product.name} />}
      <div>Stock disponible: {remainingStock}</div>

      <button
        onClick={() => addToCart(product.id, product.stock)}
        disabled={remainingStock === 0}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Agregar al carrito
      </button>

      <button
        onClick={() => router.push(`/products`)}
        className="bg-gray-700 text-white px-3 py-1 rounded"
      >
        Volver a productos
      </button>
    </div>
  );
};
export default IdProducts;
