const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-amber-600">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        <blockquote>
          <p className="italic">“Increíble servicio y atención.”</p>
          <footer className="mt-2 font-bold">— Juan P.</footer>
        </blockquote>
        <blockquote>
          <p className="italic">“Productos de excelente calidad.”</p>
          <footer className="mt-2 font-bold">— María G.</footer>
        </blockquote>
        <blockquote>
          <p className="italic">“Recomiendo 100%. Volveré a comprar.”</p>
          <footer className="mt-2 font-bold">— Lucas R.</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialsSection;
