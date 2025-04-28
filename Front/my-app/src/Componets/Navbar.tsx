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
  ChevronUp,
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
    <nav className="bg-gray-900 text-white shadow-lg overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold hover:text-amber-200 transition-colors duration-300"
        >
          SoundNest
        </Link>

        {/* Navegación */}
        <div className="flex flex-wrap items-center gap-6 text-sm max-w-full">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300"
          >
            <Home size={18} /> <span>Home</span>
          </Link>
          <Link
            href="/products"
            className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300"
          >
            <Package size={18} /> <span>Productos</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300"
          >
            <Info size={18} /> <span>Nosotros</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300"
          >
            <ShoppingCart size={18} /> <span>Carrito</span>
          </Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300 focus:outline-none"
              >
                <User size={18} />
                <span>{user.name}</span>
                {isDropdownOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <Link
                    href="/userOrders"
                    className="flex items-center px-4 py-2 hover:bg-gray-700 text-sm transition-colors duration-300"
                  >
                    <Package size={16} />{" "}
                    <span className="ml-2">Mis órdenes</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-700 text-left text-sm transition-colors duration-300"
                  >
                    <LogOut size={16} /> <span className="ml-2">Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/loginUser"
              className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300"
            >
              <LogIn size={18} /> <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
