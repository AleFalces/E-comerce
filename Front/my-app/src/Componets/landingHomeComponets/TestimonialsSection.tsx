"use client";

import React from "react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Camila Rodríguez",
    role: "Cliente frecuente",
    message:
      "Increíble experiencia. La atención fue excelente y los productos llegaron rapidísimo. ¡Súper recomendable!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Martín García",
    role: "Comprador",
    message:
      "Me sorprendió la calidad del servicio. El sitio es muy fácil de usar y encontré justo lo que buscaba.",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Laura Fernández",
    role: "Cliente feliz",
    message:
      "El proceso de compra fue muy intuitivo y la entrega fue más rápida de lo esperado. ¡Gracias!",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-10 px-4" id="testimonios">
      <h2 className="text-2xl font-bold mb-6 text-center">Testimonios</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-700 mb-2">"{testimonial.message}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <span className="text-sm text-gray-500">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
