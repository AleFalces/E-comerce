"use client";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl font-bold">Bienvenido a [Nombre de tu Tienda]</h1>
      <p className="mt-4 text-lg">Calidad, confianza y los mejores precios.</p>
      <button
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => router.push("/products")}
      >
        Ver productos
      </button>
    </section>
  );
};

export default HeroSection;
