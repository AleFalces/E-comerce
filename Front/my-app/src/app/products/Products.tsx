// Products.tsx
"use client";

import { useState, useEffect } from "react";
import { getAllProducts } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";
import Card from "@/Componets/Card";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.length ? (
        products.map((product) => <Card key={product.id} product={product} />)
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default Products;
