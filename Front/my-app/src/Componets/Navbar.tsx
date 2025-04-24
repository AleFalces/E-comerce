"use client";

import Link from "next/link";
import { useAuth } from "./AuthContext";
import { confirmAction, showSuccess } from "@/helpers/alerts";
import {
  ShoppingCart,
  User,
  LogOut,
  LogIn,
  Home,
  Info,
  Package,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = async () => {
    const confirmed = await confirmAction({
      title: "¿Cerrar sesión?",
      text: "Tendrás que iniciar sesión de nuevo para hacer compras.",
      confirmButtonText: "Sí, cerrar sesión",
    });

    if (confirmed) {
      logout();
      window.dispatchEvent(new StorageEvent("storage", { key: "user" }));
      showSuccess("Sesión cerrada con éxito");
    }
  };

  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <div>LOGO</div>
        </Link>

        {/* Navegación */}
        <div className="flex gap-6 items-center text-sm">
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <Home size={16} /> Home
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-1 hover:underline"
          >
            <Package size={16} /> Productos
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 hover:underline"
          >
            <Info size={16} /> Nosotros
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1 hover:underline"
          >
            <ShoppingCart size={16} /> Carrito
          </Link>

          {user ? (
            <div className="relative">
              {/* Usuario */}
              <span
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 cursor-pointer hover:underline"
              >
                <User size={16} /> {user.name} <ChevronDown size={16} />
              </span>

              {/* Desplegable */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 bg-gray-800 text-white mt-2 p-2 rounded shadow-md">
                  <Link
                    href="/userOrders"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Mis órdenes
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/loginUser"
              className="flex items-center gap-1 hover:underline"
            >
              <LogIn size={16} /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
