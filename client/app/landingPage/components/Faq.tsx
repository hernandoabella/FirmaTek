"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿FIRMATEK es legal para firmar contratos y documentos?",
    answer:
      "Sí. FIRMATEK cumple con regulaciones internacionales como eIDAS, ESIGN y UETA, lo cual asegura que las firmas digitales sean válidas y legalmente vinculantes.",
  },
  {
    question: "¿Puedo subir y firmar cualquier tipo de documento?",
    answer:
      "Puedes subir PDF, imágenes y documentos generados por nuestro editor. También podrás generar contratos a partir de plantillas inteligentes.",
  },
  {
    question: "¿Cómo se protege mi información?",
    answer:
      "Usamos cifrado AES-256, TLS 1.3 y almacenamiento seguro con backups automáticos. Además ofrecemos autenticación MFA y monitoreo continuo.",
  },
  {
    question: "¿Puedo invitar a otros usuarios o equipos?",
    answer:
      "Sí. Puedes crear equipos, asignar roles y gestionar permisos para que tu organización trabaje de forma segura y ordenada.",
  },
  {
    question: "¿Tiene costo usar FIRMATEK?",
    answer:
      "Contamos con un plan gratuito para uso básico y planes premium con herramientas avanzadas como flujo de firmas, POS y gestión de contratos.",
  },
  {
    question: "¿Necesito instalar algo?",
    answer:
      "No. FIRMATEK funciona 100% en la nube. Solo necesitas un navegador moderno.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="w-full py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-4">Preguntas Frecuentes</h2>
        <p className="text-gray-600 text-center mb-12">
          Todo lo que necesitas saber sobre cómo funciona FIRMATEK.
        </p>

        {/* Lista FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Respuesta */}
              {open === i && (
                <div className="p-5 bg-white text-gray-700 text-sm border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
