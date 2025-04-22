"use client";
import Link from "next/link";
import { useAuth } from "./AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="flex justify-around">
      <Link href="/">
        <div>Img</div>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/about"> About Us</Link>

      {user ? (
        <>
          <span>Hola, {user.name}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <Link href="/loginUser">
          <span>No has iniciado sesión</span>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
