"use client";

import { useState, useEffect } from "react";
import { getAllProducts } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";
import Card from "@/Componets/Card";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category.name)));

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category.name === selectedCategory);

  return (
    <div className="p-6 bg-amber-100 min-h-screen">
      <div className="mb-6 mt-4 flex justify-center items-center gap-4">
        <label htmlFor="category" className="text-red-800 font-semibold">
          Filtrar por categoría:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border-2 border-yellow-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-800"
        >
          <option value="all">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-yellow-700 font-medium">
            No hay productos disponibles
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
