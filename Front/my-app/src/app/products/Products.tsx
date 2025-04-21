"use client";
//asests
import { useState, useEffect } from "react";
import { getAllProducts } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";

//componets
import Card from "@/Componets/Card";
import Link from "next/link";

const Products: React.FC = () => {
  const [products, SetProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      SetProducts(data);
    };

    fetchProducts();
  }, [SetProducts]);

  return (
    <div className="grid  grid-cols-4 gap-4">
      {products.length ? (
        products.map((product) => (
          <Link
            href={{
              pathname: `/products/${product.id}`,
            }}
            key={product.id}
          >
            <Card key={product.id} product={product} />
          </Link>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default Products;
