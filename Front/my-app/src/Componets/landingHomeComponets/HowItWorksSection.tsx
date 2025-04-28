"use client";

import { Search, ShoppingCart, CheckCircle } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-amber-100 text-center mb-12">
        Cómo Funciona
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Paso 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <div className="text-red-800 mb-4">
            <Search size={48} />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            Explora nuestros productos
          </h3>
          <p className="text-yellow-700 text-center">
            Busca entre una amplia variedad de artículos de alta calidad.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <div className="text-red-800 mb-4">
            <ShoppingCart size={48} />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            Añade al carrito
          </h3>
          <p className="text-yellow-700 text-center">
            Selecciona tus productos y agrégalos al carrito.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <div className="text-red-800 mb-4">
            <CheckCircle size={48} />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mb-2">
            Compra y recibe
          </h3>
          <p className="text-yellow-700 text-center">
            Finaliza tu compra y espera la llegada de tus productos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
