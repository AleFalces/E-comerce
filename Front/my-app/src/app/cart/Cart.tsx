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
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data);
      setLoading(false);
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
    <div className="p-4 font-sans">
      <h1 className="text-3xl font-serif text-red-900 mb-8">Shopping Cart</h1>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-yellow-700 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-yellow-700 font-semibold">Loading Poducts...</p>
        </div>
      ) : productsInCart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl font-medium text-yellow-800 mb-6">
            There are no products added to the cart.
          </p>
          <button
            onClick={handleGoToProducts}
            className="bg-red-800 hover:bg-red-700 text-amber-100 px-6 py-3 rounded-2xl shadow-md transition-colors duration-300"
          >
            Explore Our Products
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsInCart.map((product) => {
              const quantity = productCounts[product.id];
              return (
                <div
                  key={product.id}
                  className="bg-amber-100 border-2 border-amber-800 rounded-2xl shadow-sm p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <h2 className="text-lg font-semibold text-red-800 mb-2">
                    {product.name}
                  </h2>

                  <p className="text-base font-semibold text-red-800 mb-1">
                    Price: ${product.price}
                  </p>
                  <p className="text-sm text-yellow-700 mb-1">
                    Stock: {product.stock}
                  </p>
                  <p className="text-sm text-gray-900 mb-4">
                    Quantity in cart: {quantity}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    <button
                      onClick={() => addToCart(product.id, product.stock)}
                      className="bg-red-900 text-amber-100 py-2 px-4 rounded-2xl font-semibold transition-colors hover:bg-red-800 duration-300"
                    >
                      Add another
                    </button>
                    <button
                      onClick={() => removeOneFromCart(product.id)}
                      className="bg-red-900 text-amber-100 py-2 px-4 rounded-2xl font-semibold transition-colors hover:bg-red-800 duration-300"
                    >
                      Delete One
                    </button>
                    <button
                      onClick={() => handleDeleteAll(product.id, product.name)}
                      className="bg-red-700 text-white py-2 px-4 rounded-2xl font-semibold transition-colors hover:bg-red-800 duration-300"
                    >
                      Delete all
                    </button>
                  </div>

                  <p className="text-base font-semibold text-red-800 mt-4">
                    Subtotal: ${product.price * quantity}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <p className="text-xl font-semibold">Total: ${totalPrice}</p>

            <button
              onClick={handleClearCart}
              className="bg-amber-800 hover:bg-amber-700 text-amber-100 px-6 py-3 rounded-2xl shadow-md transition-colors duration-300"
            >
              Empty Cart
            </button>

            <button
              onClick={handleCheckout}
              className="bg-red-900 hover:bg-red-800 text-amber-100 px-6 py-3 rounded-2xl shadow-md transition-colors duration-300"
            >
              {user
                ? "Complete Purchase"
                : "Log in to your account to reserve these products"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
