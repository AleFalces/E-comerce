"use client";
import { useRouter } from "next/navigation";

const CallToActionSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="py-12 px-4 text-center bg-amber-600">
      <h2 className="text-2xl font-semibold">¿Listo para empezar?</h2>
      <p className="mt-2 mb-6">Descubrí nuestros productos ahora mismo.</p>
      <button
        className="bg-blue-500 text-white py-2 px-6 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-blue-700"
        onClick={() => router.push("/products")}
      >
        Ver productos
      </button>

      <section className="mt-6">
        <p className="text-lg mb-2">
          Regístrate para obtener acceso exclusivo a nuestras promociones.
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-blue-700"
          onClick={() => router.push("/registerUser")}
        >
          Regístrate ahora
        </button>
      </section>
    </section>
  );
};

export default CallToActionSection;
