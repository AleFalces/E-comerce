"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/productsServices";
import { IProduct } from "@/helpers/mockProducts";
import { useCart } from "@/Componets/CartContext";
import { useRouter } from "next/navigation";
import { orderService } from "@/services/orderServices";
import { confirmAction, showError, showSuccess } from "@/helpers/alerts";
import { IUser } from "@/interfaces/userInterface";

const CartPage = () => {
  const {
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
    clearCart,
    getCartCount,
    cartIds,
  } = useCart();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [user, setUser] = useState<IUser>();

  const productCounts = getCartCount();

  const router = useRouter();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    checkUser();
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const productsInCart = products.filter(
    (product) => productCounts[product.id]
  );

  const totalPrice = productsInCart.reduce((accumulator, product) => {
    const quantity = productCounts[product.id] || 0;
    return accumulator + product.price * quantity;
  }, 0);

  const handleGoToProducts = () => {
    router.push(`/products`);
  };

  const handleCheckout = async () => {
    if (!user) {
      router.push("/loginUser");
      return;
    }
    const confirmed = await confirmAction({
      title: "¿Confirmar compra?",
      text: `Estás a punto de realizar una compra con ${cartIds.length} productos. ¿Deseas continuar?`,
      confirmButtonText: "Sí, confirmar compra",
    });
    if (!confirmed) return;

    try {
      await orderService({ products: cartIds });
      showSuccess("Compra realizada con éxito");
      clearCart();
      router.push("/products");
    } catch (error) {
      showError("Error al procesar la compra");
      console.error(error);
    }
  };

  const handleClearCart = async () => {
    const confirmed = await confirmAction({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos del carrito.",
      confirmButtonText: "Sí, vaciar",
    });
    if (confirmed) {
      clearCart();
      showSuccess("¡Carrito vacío!");
    }
  };

  const handleDeleteAll = async (id: number, name: string) => {
    const confirmed = await confirmAction({
      title: `¿Eliminar ${name} del carrito?`,
      text: `Se eliminarán todos los productos de este tipo del carrito.`,
      confirmButtonText: "Sí, eliminar",
    });
    if (confirmed) {
      removeAllFromCart(id);
      showSuccess("¡Eliminado correctamente!");
    }
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
                    Eliminar Uno
                  </button>
                  <button
                    onClick={() => handleDeleteAll(product.id, product.name)}
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
        <div className="mt-8 flex flex-col gap-4">
          <p className="text-xl font-bold">Total: ${totalPrice}</p>

          <button
            onClick={handleClearCart}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Vaciar carrito
          </button>

          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {user ? "Finalizar compra" : "Logueate para realizar tu reserva"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
