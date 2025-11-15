import { FaBuilding, FaBalanceScale, FaLaptopCode, FaCalculator } from "react-icons/fa";

export default function WhoIsFor() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">¿Para quién es FIRMATEK?</h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Una plataforma creada para empresas y profesionales que necesitan gestionar contratos, firmas digitales y documentos legales de forma rápida, segura y moderna.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresas */}
          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition bg-white">
            <FaBuilding className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Empresas</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Automatiza contratos</li>
              <li>• Control de versiones</li>
              <li>• Firma electrónica avanzada</li>
            </ul>
          </div>

          {/* Abogados / Notarios */}
          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition bg-white">
            <FaBalanceScale className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Abogados / Notarios</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Plantillas legales inteligentes</li>
              <li>• Flujo de aprobación</li>
              <li>• Firma certificada e historial legal</li>
            </ul>
          </div>

          {/* Freelancers */}
          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition bg-white">
            <FaLaptopCode className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Freelancers</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Contratos en minutos</li>
              <li>• Firmas ilimitadas</li>
              <li>• Seguimiento en tiempo real</li>
            </ul>
          </div>

          {/* Contadores / Administradores */}
          <div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition bg-white">
            <FaCalculator className="text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Contadores / Administradores</h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>• Facturas organizadas</li>
              <li>• Contratos recurrentes</li>
              <li>• Roles y permisos</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-lg font-medium mb-4">Miles de profesionales ya confían en FIRMATEK.</p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-black text-white rounded-xl text-lg font-semibold hover:opacity-90 transition"
          >
            Comenzar ahora
          </a>
        </div>
      </div>
    </section>
  );
}