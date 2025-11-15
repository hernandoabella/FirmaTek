"use client";

import { ShieldCheck, FileCheck, PenTool, FolderArchive, Timer, Database } from "lucide-react";

const features = [
  {
    title: "Caja Legal DIAN Automática",
    description: "Guarda automáticamente tus facturas XML/ZIP y PDF, organizadas por proveedor, fecha y valor.",
    icon: FolderArchive,
  },
  {
    title: "Contratos Inteligentes",
    description: "Crea contratos automáticos o versiones avanzadas con certificación de hash en blockchain.",
    icon: FileCheck,
  },
  {
    title: "Firma Digital Certificada",
    description: "Invita a firmar, aplica sello de tiempo y genera evidencia legal válida ante jueces y la DIAN.",
    icon: PenTool,
  },
  {
    title: "Auditoría Completa",
    description: "Registros de quién firmó, cuándo, qué versión y desde qué dispositivo.",
    icon: ShieldCheck,
  },
  {
    title: "Alertas Tributarias",
    description: "Notificaciones de vencimientos, facturas faltantes y discrepancias entre XML y PDF.",
    icon: Timer,
  },
  {
    title: "Almacenamiento Seguro",
    description: "Infraestructura con redundancia, cifrado y backups automáticos en AWS.",
    icon: Database,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            ¿Qué puedes hacer con <span className="text-teal-600">FIRMATEK</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que tu negocio necesita para estar organizado, legalmente blindado 
            y funcionando sin dolores de cabeza.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="p-8 bg-white border rounded-2xl shadow-sm hover:shadow-xl transition cursor-default"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-100 text-teal-600 mb-6">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
