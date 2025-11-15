export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">


      {/* Contenedor principal */}
      <div className="flex-1 ml-64 flex flex-col">
        
       

        {/* Contenido del dashboard */}
        <main className="p-6 space-y-8">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Resumen general de tu plataforma legal digital.
            </p>
          </div>

          {/* GRID DE MÉTRICAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-gray-500 text-sm mb-1">Facturas almacenadas</h3>
              <p className="text-3xl font-bold text-primary">128</p>
              <p className="text-xs text-gray-500 mt-2">Últimos 30 días</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-gray-500 text-sm mb-1">Contratos generados</h3>
              <p className="text-3xl font-bold text-primary">23</p>
              <p className="text-xs text-gray-500 mt-2">Este mes</p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h3 className="text-gray-500 text-sm mb-1">Firmas digitales</h3>
              <p className="text-3xl font-bold text-primary">47</p>
              <p className="text-xs text-gray-500 mt-2">Completadas</p>
            </div>

          </div>

          {/* SECCIÓN DE ESTADOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h2 className="text-xl font-semibold mb-4">Estado de Facturas</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>No enviadas:</span> <strong>5</strong>
                </li>
                <li className="flex justify-between">
                  <span>Pendientes por validar:</span> <strong>12</strong>
                </li>
                <li className="flex justify-between">
                  <span>Válidas:</span> <strong>111</strong>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border">
              <h2 className="text-xl font-semibold mb-4">Estado de Contratos</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Borradores:</span> <strong>4</strong>
                </li>
                <li className="flex justify-between">
                  <span>En firma:</span> <strong>7</strong>
                </li>
                <li className="flex justify-between">
                  <span>Completados:</span> <strong>12</strong>
                </li>
              </ul>
            </div>

          </div>

          {/* ACTIVIDAD RECIENTE */}
          <div className="p-6 bg-white shadow-md rounded-xl border">
            <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>📄 Nueva factura cargada: PROVEEDOR S.A.</span>
                <span className="text-sm text-gray-500">Hace 2h</span>
              </div>

              <div className="flex justify-between">
                <span>🖋️ Contrato firmado por Juan Pérez.</span>
                <span className="text-sm text-gray-500">Hace 5h</span>
              </div>

              <div className="flex justify-between">
                <span>📁 3 documentos archivados automáticamente.</span>
                <span className="text-sm text-gray-500">Ayer</span>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}
