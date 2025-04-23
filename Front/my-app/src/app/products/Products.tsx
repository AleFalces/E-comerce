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

  // 🟡 Extraemos las categorías únicas para el dropdown
  const categories = Array.from(new Set(products.map((p) => p.category.name)));

  // 🟢 Aplicamos filtro si hay una categoría seleccionada
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category.name === selectedCategory);

  return (
    <div>
      {/* 🔽 Dropdown de categorías */}
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">
          Filtrar por categoría:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-1 border rounded"
        >
          <option value="all">Todas</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 🧱 Productos filtrados */}
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Products;
