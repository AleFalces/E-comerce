const AboutPage: React.FC = () => {
  return (
    <main className="flex  h-dvh flex-col justify-around  ">
      <section className="flex flex-col items-center">
        <h2>Sobre Nosotros</h2>
        <p>
          En [Nombre de tu tienda], nos especializamos en ofrecerte la mejor
          selección de productos electrónicos, incluyendo celulares, tablets y
          accesorios de última generación. Nos apasiona la tecnología y
          trabajamos constantemente para brindarte productos de alta calidad a
          precios competitivos.
        </p>

        <p>
          Nuestra misión es garantizar una experiencia de compra fácil, rápida y
          segura. Contamos con un equipo comprometido en brindarte el mejor
          servicio, asegurándonos de que encuentres exactamente lo que
          necesitas.
        </p>
      </section>
      <section className="flex flex-col items-center">
        <h2>¿Eres un proveedor?</h2>
        <p>
          Si deseas agregar tus productos a nuestro catálogo, escríbenos a
          contacto@[tuempresa].com y nuestro equipo se pondrá en contacto
          contigo lo antes posible.
        </p>
      </section>
      <section className="flex flex-col items-center">
        <h2>Envíos a todo el país</h2>
        <p>
          Realizamos envíos a nivel nacional con tiempos de entrega rápidos y
          seguros. Trabajamos con empresas de logística confiables para que tu
          pedido llegue en perfectas condiciones. Además, ofrecemos opciones de
          envío express para quienes necesiten recibir su compra con urgencia.
        </p>
        <p>
          Si tienes alguna pregunta, no dudes en contactarnos. ¡Gracias por
          confiar en nosotros!
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
