"use client";

import { useRouter } from "next/navigation";
import { Rocket, UserPlus } from "lucide-react";

const CallToActionSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="py-12 px-4 text-center bg-red-800">
      <h2 className="text-3xl font-bold text-amber-100 flex items-center justify-center gap-2 mb-4">
        <Rocket size={24} />
        ¿Listo para empezar?
      </h2>
      <p className="text-amber-200 mb-8">
        Descubrí nuestros productos ahora mismo.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          className="bg-amber-100 text-red-800 px-6 py-3 rounded-xl font-semibold transition-colors duration-300 hover:bg-amber-200"
          onClick={() => router.push("/products")}
        >
          Ver productos
        </button>
        <button
          className="bg-amber-100 text-red-800 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-amber-200"
          onClick={() => router.push("/registerUser")}
        >
          <UserPlus size={20} />
          Regístrate ahora
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
