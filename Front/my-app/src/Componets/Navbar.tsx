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
      <Link href="/cart"> Cart</Link>

      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <button onClick={logout}>Logout</button>
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
