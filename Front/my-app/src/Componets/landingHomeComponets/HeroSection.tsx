"use client";

import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section
      className={`relative flex justify-center items-center px-4 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: "url('/Instruments.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      {/* Overlay to darken background for text legibility */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Text container with semi-transparent backdrop for better contrast */}
      <div className="relative text-center max-w-2xl bg-gray-900 bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-100 drop-shadow-lg">
          Bienvenido a nuestra tienda
        </h1>
        <p className="mt-4 text-lg md:text-xl text-amber-200 drop-shadow-lg">
          Explora los instrumentos más increíbles, solo aquí.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
