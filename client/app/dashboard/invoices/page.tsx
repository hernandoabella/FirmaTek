"use client";

import { Plus, Search, Upload, FileText, MoreVertical } from "lucide-react";
import Link from "next/link";

export default function InvoicesPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-64 flex flex-col">

        <main className="p-6 space-y-10">

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Facturas</h1>
              <p className="text-gray-600 mt-1">Gestiona, sube y valida tus facturas electrónicas.</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/dashboard/invoices/upload"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition"
              >
                <Upload className="w-4 h-4" />
                Subir factura
              </Link>

              <Link
                href="/dashboard/invoices/create"
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
              >
                <Plus className="w-4 h-4" />
                Nueva factura
              </Link>
            </div>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 bg-white shadow rounded-xl border">
              <h3 className="text-gray-500 text-sm">Facturas Totales</h3>
              <p className="text-3xl font-bold mt-1">148</p>
              <p className="text-xs text-gray-500 mt-2">Últimos 30 días</p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl border">
              <h3 className="text-gray-500 text-sm">Pendientes por validar</h3>
              <p className="text-3xl font-bold mt-1 text-amber-600">12</p>
              <p className="text-xs text-gray-500 mt-2">En revisión</p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl border">
              <h3 className="text-gray-500 text-sm">Válidas</h3>
              <p className="text-3xl font-bold mt-1 text-green-600">111</p>
              <p className="text-xs text-gray-500 mt-2">Aprobadas por sistema</p>
            </div>

          </div>

          {/* BUSCADOR + FILTROS */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center">

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar factura..."
                className="w-full bg-white border px-10 py-2 rounded-lg shadow-sm focus:outline-primary"
              />
            </div>

            {/* Filters */}
            <select className="bg-white border px-3 py-2 rounded-lg shadow-sm">
              <option>Estado</option>
              <option>Pendiente</option>
              <option>Válida</option>
              <option>Rechazada</option>
            </select>
          </div>

          {/* FACTURAS LIST */}
          <div className="bg-white shadow rounded-xl border overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-600 text-sm">
                <tr>
                  <th className="p-4">Factura</th>
                  <th className="p-4">Proveedor</th>
                  <th className="p-4">Fecha</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>

              <tbody className="text-gray-700 divide-y">

                {/* ITEM 1 */}
                <tr>
                  <td className="p-4 font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    FAC-2024-00121
                  </td>

                  <td className="p-4">Proveedor S.A.</td>

                  <td className="p-4">2025-01-14</td>

                  <td className="p-4">
                    <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-700">
                      Válida
                    </span>
                  </td>

                  <td className="p-4 text-right">
                    <Link
                      href="/dashboard/invoices/1"
                      className="inline-flex p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>

                {/* ITEM 2 */}
                <tr>
                  <td className="p-4 font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    FAC-2024-00122
                  </td>

                  <td className="p-4">Importadores LTDA</td>

                  <td className="p-4">2025-01-13</td>

                  <td className="p-4">
                    <span className="text-sm px-2 py-1 rounded bg-amber-100 text-amber-700">
                      Pendiente
                    </span>
                  </td>

                  <td className="p-4 text-right">
                    <Link
                      href="/dashboard/invoices/2"
                      className="inline-flex p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </main>

      </div>
    </div>
  );
}
