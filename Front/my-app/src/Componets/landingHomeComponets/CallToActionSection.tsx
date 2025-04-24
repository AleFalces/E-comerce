"use client";
import { useRouter } from "next/navigation";

const CallToActionSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="py-12 px-4 text-center bg-amber-600">
      <h2 className="text-2xl font-semibold">¿Listo para empezar?</h2>
      <p className="mt-2 mb-6">Descubrí nuestros productos ahora mismo.</p>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded"
        onClick={() => router.push("/products")}
      >
        Ver productos
      </button>
    </section>
  );
};

export default CallToActionSection;
