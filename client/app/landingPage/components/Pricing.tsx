import React from "react";
import { Check } from "lucide-react";

// PricingSection.tsx
// Sección de precios para planes SaaS de FIRMATEK

const plans = [
  {
    name: "Básico",
    price: "39.000",
    description: "Ideal para pequeños negocios y freelancers",
    features: [
      "50 facturas/mes",
      "5 contratos generados",
      "5 documentos firmados",
      "Almacenamiento seguro",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "79.000",
    description: "Para negocios que necesitan orden completo y automatización",
    features: [
      "300 facturas/mes",
      "20 contratos generados",
      "Firma digital ilimitada",
      "Alertas DIAN",
      "Exportación contable",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "199.000",
    description: "Empresas con alto volumen y flujos de aprobación",
    features: [
      "Facturación ilimitada",
      "Smart Contracts en blockchain",
      "Usuarios múltiples",
      "Integración con ERP",
      "Auditoría avanzada",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Planes y Precios
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Elige el plan ideal para tu negocio. Sin contratos. Cancela cuando quieras.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border shadow-sm bg-white transition-all ${
                plan.highlighted ? "scale-105 border-blue-600 shadow-md" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-gray-600 ml-1 mb-1">/mes</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}