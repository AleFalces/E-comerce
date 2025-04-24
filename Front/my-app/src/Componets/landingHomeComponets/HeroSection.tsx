"use client";

import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <section
      className={`flex justify-center items-center bg-blue-600 h-screen text-white 
        transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Bienvenido a nuestra tienda</h1>
        <p className="mt-4 text-lg">
          Explora los instrumentos más increíbles, solo aquí.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
