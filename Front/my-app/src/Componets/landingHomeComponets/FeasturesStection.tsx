const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">¿Por qué elegirnos?</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-bold text-lg">Envíos rápidos</h3>
          <p>Recibí tus pedidos en tiempo récord.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Productos seleccionados</h3>
          <p>Solo trabajamos con lo mejor del mercado.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Atención personalizada</h3>
          <p>Estamos para ayudarte siempre que lo necesites.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
