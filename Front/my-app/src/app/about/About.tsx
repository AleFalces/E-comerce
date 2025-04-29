"use client";

const AboutPage: React.FC = () => {
  return (
    <main className="p-6 bg-amber-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {[
          {
            title: "🎵 Our Passion for Music",
            content: [
              `At SoundNest Instruments, music is our driving force. Founded by musicians for musicians, we understand the importance of finding the perfect instrument and continuously improving your sound.`,
              `Our mission is to provide an easy, fast, and secure shopping experience, with a team dedicated to offering you the best service.`,
            ],
          },
          {
            title: "🎸 Carefully Curated Selection",
            content: [
              `We specialize in guitars, basses, drums, and essential accessories like strings and picks. Each product is selected for its tone, durability, and performance.`,
              `Whether you're setting up your first rig or upgrading your gear, you'll find what you need to play at your best here.`,
            ],
          },
          {
            title: "🥁 Support for Every Musician",
            content: [
              `We offer personalized recommendations, resources for beginners, and expert tips to keep your instruments in top condition.`,
              `By shopping with us, you become part of the SoundNest community, where your passion is our passion.`,
            ],
          },
          {
            title: "📬 Contact Us",
            content: [
              `Contact Us: Do you have questions or need help choosing the right equipment? We're here for you!`,
              `Contact Us: Email: support@soundnestmusic.com`,
              `Contact Us: Phone: +1 (555) 123-4567`,
              `Contact Us: Address: 221 Harmony Lane, Melody City, NY, USA`,
              `Contact Us: Hours: Mon-Fri: 9am - 6pm (EST)`,
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
