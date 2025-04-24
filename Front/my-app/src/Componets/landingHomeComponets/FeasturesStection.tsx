import { Truck, CreditCard, Headphones } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Por qué elegirnos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="text-blue-500 mb-4">
            <Truck size={48} />
          </div>
          <h3 className="text-xl font-semibold">Envío rápido</h3>
          <p className="text-gray-600 mt-2">
            Recibe tus productos en tiempo récord, sin costos ocultos.
          </p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="text-green-500 mb-4">
            <CreditCard size={48} />
          </div>
          <h3 className="text-xl font-semibold">Pago seguro</h3>
          <p className="text-gray-600 mt-2">
            Disfruta de una experiencia de pago protegida y confiable.
          </p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <div className="text-yellow-500 mb-4">
            <Headphones size={48} />
          </div>
          <h3 className="text-xl font-semibold">Soporte 24/7</h3>
          <p className="text-gray-600 mt-2">
            Nuestro equipo está disponible siempre para resolver cualquier duda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
