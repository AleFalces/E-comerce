import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-around">
      <Link href="/">
        <div>Img</div>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/about"> About Us</Link>
      <Link href="/loginUser"> User</Link>
    </div>
  );
};

export default Navbar;
