const AboutPage: React.FC = () => {
  return (
    <main className="flex  h-dvh flex-col justify-around m-24">
      <section className="flex flex-col items-center">
        <h2>🎵 Our Passion for Music</h2>
        <p>
          At SoundNest Instruments, music is more than just a business — it`s
          our heartbeat. Founded by musicians, for musicians, we understand the
          joy of finding the right instrument and the drive to keep improving
          your sound. Our mission is to provide quality gear for everyone, from
          bedroom players to stage professionals.
        </p>

        <p>
          Nuestra misión es garantizar una experiencia de compra fácil, rápida y
          segura. Contamos con un equipo comprometido en brindarte el mejor
          servicio, asegurándonos de que encuentres exactamente lo que
          necesitas.
        </p>
      </section>
      <section className="flex flex-col items-center">
        <h2>🎸 Carefully Curated Selection</h2>
        <p>
          We specialize in guitars, basses, drums, and essential accessories
          like strings, drumsticks, and picks. Every item in our catalog is
          selected for its tone, durability, and performance. Whether you`re
          building your first setup or upgrading your gear, we`ve got what you
          need to play your best.
        </p>
      </section>
      <section className="flex flex-col items-center">
        <h2>🥁 Support for Every Musician</h2>
        <p>
          offer personalized recommendations, beginner-friendly resources, and
          expert tips to keep your instruments in top shape. When you shop with
          us, you`re part of the SoundNest community.
        </p>
      </section>
      <section className="flex flex-col items-center">
        <h2>📬 Contact Us</h2>
        <p>
          Have a question or need help finding the right gear? We`d love to hear
          from you!
        </p>
        <p>Email: support@soundnestmusic.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Location: 221 Harmony Lane, Melody City, NY, USA</p>
        <p>Hours: Mon-Fri: 9am - 6pm (EST)</p>
      </section>
    </main>
  );
};

export default AboutPage;
