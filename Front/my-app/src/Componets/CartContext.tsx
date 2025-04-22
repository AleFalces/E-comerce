"use client";
import { CartContextType } from "@/interfaces/cartcontextInterface";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartIds, setCartIds] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartIds(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartIds));
  }, [cartIds]);

  const addToCart = (id: number) => setCartIds((prev) => [...prev, id]);

  const removeOneFromCart = (id: number) => {
    const index = cartIds.indexOf(id);
    if (index !== -1) {
      const newCart = [...cartIds];
      newCart.splice(index, 1);
      setCartIds(newCart);
    }
  };

  const removeAllFromCart = (id: number) => {
    setCartIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const clearCart = () => setCartIds([]);

  const getCartCount = (): Record<number, number> => {
    return cartIds.reduce((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  };

  return (
    <CartContext.Provider
      value={{
        cartIds,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro del CartProvider");
  return ctx;
};
