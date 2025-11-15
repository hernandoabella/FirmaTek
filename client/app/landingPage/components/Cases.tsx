export default function UseCasesGrid() {
  const useCases = [
    {
      title: "Gestión de Facturas",
      description:
        "Sube, organiza y valida facturas electrónicas en segundos para tu empresa.",
      icon: "📄",
    },
    {
      title: "Contratos Inteligentes",
      description:
        "Crea, edita y gestiona contratos con plantillas automáticas y firmas digitales.",
      icon: "📝",
    },
    {
      title: "Firmas y Autenticación",
      description:
        "Solicita firmas electrónicas seguras con verificación de identidad incluida.",
      icon: "✒️",
    },
    {
      title: "Auditoría y Seguridad",
      description:
        "Historial completo de cambios, accesos y firmas para auditorías internas.",
      icon: "🔐",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Casos de Uso</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}