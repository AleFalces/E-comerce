"use client";
import { Truck, CreditCard, Headphones } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-amber-100">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-12">
        Por qué elegirnos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <div className="text-red-800 mb-4">
            <Truck size={48} />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            Envío rápido
          </h3>
          <p className="text-yellow-700 text-center">
            Recibe tus productos en tiempo récord, sin costos ocultos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <div className="text-red-800 mb-4">
            <CreditCard size={48} />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            Pago seguro
          </h3>
          <p className="text-yellow-700 text-center">
            Disfruta de una experiencia de pago protegida y confiable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <div className="text-red-800 mb-4">
            <Headphones size={48} />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            Soporte 24/7
          </h3>
          <p className="text-yellow-700 text-center">
            Nuestro equipo está disponible siempre para resolver cualquier duda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
