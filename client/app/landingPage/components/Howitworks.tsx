export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sube tus documentos",
      description:
        "Arrastra facturas, contratos o PDFs y el sistema los organiza automáticamente.",
    },
    {
      step: "02",
      title: "Procesamos y validamos",
      description:
        "Firmatek lee, estructura, valida y prepara cada documento para firma o auditoría.",
    },
    {
      step: "03",
      title: "Firma y gestiona",
      description:
        "Envía para firma digital, gestiona versiones y lleva control total del proceso.",
    },
    {
      step: "04",
      title: "Descarga o comparte",
      description:
        "Obtén documentos firmados, certificados y listos para uso legal o empresarial.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">¿Cómo Funciona Firmatek?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.step}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-primary font-bold text-3xl">{step.step}</p>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}