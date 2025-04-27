"use client";

const AboutPage: React.FC = () => {
  return (
    <main className="p-6 bg-amber-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {[
          {
            title: "🎵 Nuestra Pasión por la Música",
            content: [
              `En SoundNest Instruments, la música es nuestro motor. Fundada por músicos para músicos, entendemos la importancia de encontrar el instrumento ideal y seguir mejorando tu sonido.`,
              `Nuestra misión es ofrecer una experiencia de compra fácil, rápida y segura, con un equipo comprometido en brindarte el mejor servicio.`,
            ],
          },
          {
            title: "🎸 Selección Cuidadosamente Curada",
            content: [
              `Nos especializamos en guitarras, bajos, baterías y accesorios esenciales como cuerdas y púas. Cada producto es seleccionado por su tono, durabilidad y rendimiento.`,
              `Ya sea que estés armando tu primer setup o actualizando tu equipo, aquí encontrarás lo que necesitas para tocar al máximo.`,
            ],
          },
          {
            title: "🥁 Soporte para Cada Músico",
            content: [
              `Ofrecemos recomendaciones personalizadas, recursos para principiantes y consejos de expertos para mantener tus instrumentos en óptimas condiciones.`,
              `Al comprar con nosotros, te unes a la comunidad SoundNest, donde tu pasión es la nuestra.`,
            ],
          },
          {
            title: "📬 Contáctanos",
            content: [
              `Contáctanos: ¿Tienes preguntas o necesitas ayuda para elegir el equipo adecuado? ¡Estamos aquí para ti!`,
              `Contáctanos: Email: support@soundnestmusic.com`,
              `Contáctanos: Teléfono: +1 (555) 123-4567`,
              `Contáctanos: Dirección: 221 Harmony Lane, Melody City, NY, USA`,
              `Contáctanos: Horario: Lun-Vie: 9am - 6pm (EST)`,
            ],
          },
        ].map((section) => (
          <section
            key={section.title}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-3xl font-bold text-red-800 mb-4 underline">
              {section.title}
            </h2>
            {section.content.map((line, idx) => (
              <p key={idx} className="text-lg text-yellow-700 mb-2">
                {line}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
};

export default AboutPage;
