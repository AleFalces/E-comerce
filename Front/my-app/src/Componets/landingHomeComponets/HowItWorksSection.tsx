import { Search, ShoppingCart, CheckCircle } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 bg-amber-700 text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Cómo Funciona</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="text-blue-500 mb-4">
            <Search size={48} />
          </div>
          <h3 className="text-xl font-semibold">Explora nuestros productos</h3>
          <p className="text-gray-600 mt-2">
            Busca entre una amplia variedad de artículos de alta calidad.
          </p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="text-green-500 mb-4">
            <ShoppingCart size={48} />
          </div>
          <h3 className="text-xl font-semibold">Añade al carrito</h3>
          <p className="text-gray-600 mt-2">
            Selecciona tus productos y agrégalos al carrito.
          </p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="text-yellow-500 mb-4">
            <CheckCircle size={48} />
          </div>
          <h3 className="text-xl font-semibold">Compra y recibe</h3>
          <p className="text-gray-600 mt-2">
            Finaliza tu compra y espera la llegada de tus productos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
