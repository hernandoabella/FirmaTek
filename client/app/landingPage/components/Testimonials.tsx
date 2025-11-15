import React from "react";
import { Star } from "lucide-react";

// Testimonials.tsx
// Sección de testimonios para generar confianza desde el landing de FIRMATEK

const testimonials = [
  {
    name: "María Fernanda López",
    role: "Dueña de Panadería Don Pancho",
    quote:
      "Antes perdía facturas y vivía con miedo a la DIAN. FIRMATEK me ordenó todo y ahora mi contador es feliz.",
    rating: 5,
  },
  {
    name: "Carlos Andrade",
    role: "Administrador de Hostal Andino",
    quote:
      "La firma digital y los contratos automáticos me han ahorrado horas cada semana. Súper recomendado.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Freelancer de Marketing",
    quote:
      "Firmar contratos con clientes y guardar mis facturas ahora es un proceso de 5 minutos. Excelente plataforma.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Lo que dicen nuestros usuarios
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6">“{t.quote}”</p>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-gray-600 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}