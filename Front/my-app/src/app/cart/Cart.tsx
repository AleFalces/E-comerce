"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";
import { useCart } from "@/Componets/CartContext";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const {
    addToCart,
    removeOneFromCart,
    removeAllFromCart, // ⬅️ nueva función que elimina todos los de un producto
    clearCart,
    getCartCount,
  } = useCart();

  const [products, setProducts] = useState<IProduct[]>([]);
  const router = useRouter();
  const productCounts = getCartCount();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const productsInCart = products.filter((p) => productCounts[p.id]);

  const totalPrice = productsInCart.reduce((acc, product) => {
    const quantity = productCounts[product.id] || 0;
    return acc + product.price * quantity;
  }, 0);

  const handleGoToProducts = () => {
    router.push(`/products`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>

      {productsInCart.length === 0 ? (
        <div>
          <p>No hay productos en el carrito.</p>
          <button
            onClick={handleGoToProducts}
            className="bg-gray-700 text-white px-3 py-1 rounded"
          >
            Volver a productos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsInCart.map((product) => {
            const quantity = productCounts[product.id];
            return (
              <div
                key={product.id}
                className="border rounded-lg shadow-md p-4 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <p className="font-medium">Precio: ${product.price}</p>
                <p>Cantidad: {quantity}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => addToCart(product.id, product.stock)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Agregar otro
                  </button>
                  <button
                    onClick={() => removeOneFromCart(product.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Elimir Uno
                  </button>
                  <button
                    onClick={() => removeAllFromCart(product.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Eliminar todos
                  </button>
                </div>

                <p className="font-semibold text-blue-600 mt-2">
                  Subtotal: ${product.price * quantity}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {productsInCart.length > 0 && (
        <div className="mt-8">
          <p className="text-xl font-bold">Total: ${totalPrice}</p>
          <button
            onClick={clearCart}
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
