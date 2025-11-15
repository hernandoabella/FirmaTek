import React from "react";
import { CheckCircle } from "lucide-react";

// BenefitsGrid.tsx
// Sección de beneficios clave que resumen por qué FIRMATEK es mejor que lo tradicional

const benefits = [
  {
    title: "Ahorro de tiempo",
    description:
      "Automatiza tareas legales, tributarias y administrativas que antes tomaban horas. Todo en un solo lugar.",
  },
  {
    title: "Seguridad jurídica",
    description:
      "Tus documentos están firmados digitalmente, con sello de tiempo y evidencia verificable.",
  },
  {
    title: "Cumplimiento DIAN",
    description:
      "Almacena y organiza automáticamente tus XML/ZIP y PDFs de facturación electrónica, sin errores.",
  },
  {
    title: "Cero papel, cero caos",
    description:
      "Evita pérdidas de contratos, facturas o evidencias. Todo se guarda con orden y respaldo.",
  },
  {
    title: "Prueba legal sólida",
    description:
      "Cada documento y firma queda registrado con auditoría completa para resolver disputas fácilmente.",
  },
  {
    title: "Escalable para tu negocio",
    description:
      "Funciona para tiendas pequeñas, restaurantes, hostales, freelancers y empresas en crecimiento.",
  },
];

export default function BenefitsGrid() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Beneficios de usar <span className="text-blue-600">FIRMATEK</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm border hover:shadow-md transition-all"
            >
              <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}