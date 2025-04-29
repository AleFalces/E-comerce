"use client";

import { Music, Speaker, Drum, Mail } from "lucide-react";
import React from "react";

const AboutPage: React.FC = () => {
  const sections = [
    {
      Icon: Music,
      title: "Our Passion for Music",
      content: [
        `At SoundNest Instruments, music is our driving force. Founded by musicians for musicians, we understand the importance of finding the perfect instrument and continuously improving your sound.`,
        `Our mission is to provide an easy, fast, and secure shopping experience, with a team dedicated to offering you the best service.`,
      ],
    },
    {
      Icon: Speaker,
      title: "Carefully Curated Selection",
      content: [
        `We specialize in guitars, basses, drums, and essential accessories like strings and picks. Each product is selected for its tone, durability, and performance.`,
        `Whether you're setting up your first rig or upgrading your gear, you'll find what you need to play at your best here.`,
      ],
    },
    {
      Icon: Drum,
      title: "Support for Every Musician",
      content: [
        `We offer personalized recommendations, resources for beginners, and expert tips to keep your instruments in top condition.`,
        `By shopping with us, you become part of the SoundNest community, where your passion is our passion.`,
      ],
    },
    {
      Icon: Mail,
      title: "Contact Me",
      content: [
        `Are you looking for a reliable and skilled web developer for your next project? I'm here to help.`,
        `With experience in building full-stack web applications using modern technologies like React, Next.js, TypeScript, and Node.js, I focus on creating clean, responsive, and high-performance solutions.`,
        `Whether you're a small business, a startup, or an individual with an idea, I’d love to hear from you.`,
        `📍 Based in Córdoba, Argentina – available for remote work worldwide.`,
        `✉️ Email: alexisfalces.dev@gmail.com`,
        `🔗 LinkedIn: linkedin.com/in/alexis-falces-95b892252`,
      ],
    },
  ];

  return (
    <main className="p-6 bg-amber-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {sections.map(({ Icon, title, content }) => (
          <section
            key={title}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="flex items-center gap-2 text-3xl font-bold text-red-800 mb-4 underline justify-center">
              <Icon className="w-7 h-7 text-red-800" />
              {title}
            </h2>
            {content.map((line, idx) => (
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
