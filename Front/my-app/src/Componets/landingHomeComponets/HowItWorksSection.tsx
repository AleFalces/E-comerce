const HowItWorksSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        ¿Cómo funciona?
      </h2>
      <div className="grid gap-6 sm:grid-cols-3 text-center">
        <div>
          <h3 className="font-bold text-lg">1. Elegí</h3>
          <p>Buscá y filtrá nuestros productos.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">2. Comprá</h3>
          <p>Agregalos al carrito y realizá tu compra.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">3. Recibí</h3>
          <p>Esperá tu pedido desde la comodidad de tu casa.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
