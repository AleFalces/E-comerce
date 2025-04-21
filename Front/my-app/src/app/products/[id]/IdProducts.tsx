"use client";

import { getProductsById } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const IdProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (typeof id === "string") {
        const data = await getProductsById(id);
        setProduct(data);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {!product ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.image && <img src={product.image} alt={product.name} />}{" "}
        </div>
      )}
    </div>
  );
};

export default IdProducts;
