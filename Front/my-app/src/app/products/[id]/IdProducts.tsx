"use client";

import { getProductsById } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/Componets/CartContext";

const IdProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      if (typeof id === "string") {
        const data = await getProductsById(id);
        setProduct(data);
      }
    };

    fetchProduct();
  }, [id]);

  const handleGoToProducts = () => {
    router.push(`/products`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.image && <img src={product.image} alt={product.name} />}
      <div>stock: {product.stock}</div>

      <button
        onClick={() => addToCart(product.id, product.stock)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Agregar al carrito
      </button>

      <button
        onClick={handleGoToProducts}
        className="bg-gray-700 text-white px-3 py-1 rounded"
      >
        Volver a productos
      </button>
    </div>
  );
};

export default IdProducts;
