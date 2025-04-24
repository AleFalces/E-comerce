"use client";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import { confirmAction, showSuccess } from "@/helpers/alerts";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    const confirmed = await confirmAction({
      title: "¿Cerrar sesión?",
      text: "Tendrás que iniciar sesión de nuevo para hacer compras.",
      confirmButtonText: "Sí, cerrar sesión",
    });

    if (confirmed) {
      logout();
      showSuccess("Sesión cerrada con éxito");
    }
  };
  return (
    <nav className="flex justify-around">
      <Link href="/">
        <div>Img</div>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/about"> About Us</Link>
      <Link href="/cart"> Cart</Link>

      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link href="/loginUser">
          <span>Login</span>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
