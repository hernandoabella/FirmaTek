"use client";

import { FileText, Download, Trash2 } from "lucide-react";
import Link from "next/link";

interface InvoiceDetailProps {
  id: string;
}

export default function InvoiceDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Datos de ejemplo, luego conectas con API
  const invoice = {
    number: `FAC-2024-${id}`,
    provider: "Proveedor S.A.",
    date: "2025-01-14",
    amount: "$1.200.000",
    status: "Válida",
    items: [
      { description: "Producto A", quantity: 2, price: "$200.000" },
      { description: "Servicio B", quantity: 1, price: "$800.000" },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 ml-64 flex flex-col">
        <main className="p-6 space-y-6">

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Factura {invoice.number}
              </h1>
              <p className="text-gray-600 mt-1">
                Detalle completo de la factura
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition">
                <Download className="w-4 h-4" />
                Descargar PDF
              </button>

              <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-500 transition">
                <Trash2 className="w-4 h-4" />
                Eliminar
              </button>
            </div>
          </div>

          {/* INFORMACIÓN DE LA FACTURA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow rounded-xl border">
              <h2 className="text-xl font-semibold mb-4">Información</h2>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>Proveedor:</strong> {invoice.provider}
                </li>
                <li>
                  <strong>Fecha:</strong> {invoice.date}
                </li>
                <li>
                  <strong>Monto:</strong> {invoice.amount}
                </li>
                <li>
                  <strong>Estado:</strong>{" "}
                  <span className={`px-2 py-1 rounded ${
                    invoice.status === "Válida" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {invoice.status}
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white shadow rounded-xl border">
              <h2 className="text-xl font-semibold mb-4">Items</h2>
              <table className="w-full text-left">
                <thead className="text-gray-500 text-sm border-b">
                  <tr>
                    <th className="p-2">Descripción</th>
                    <th className="p-2">Cantidad</th>
                    <th className="p-2">Precio</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-700">
                  {invoice.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="p-2">{item.description}</td>
                      <td className="p-2">{item.quantity}</td>
                      <td className="p-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ACCIONES */}
          <div className="flex justify-end gap-3">
            <Link
              href="/dashboard/invoices"
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Volver a facturas
            </Link>
          </div>

        </main>
      </div>
    </div>
  );
}
