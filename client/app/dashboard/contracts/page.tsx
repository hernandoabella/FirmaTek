"use client";

import { Plus, FileText, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Contract {
  id: string;
  title: string;
  type: string;
  status: "Borrador" | "En firma" | "Completado";
  createdAt: string;
}

export default function ContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>([
    {
      id: "1",
      title: "Contrato de arrendamiento",
      type: "Arrendamiento",
      status: "Borrador",
      createdAt: "2025-11-01",
    },
    {
      id: "2",
      title: "Contrato de proveedor",
      type: "Proveedor",
      status: "En firma",
      createdAt: "2025-11-05",
    },
    {
      id: "3",
      title: "Contrato laboral básico",
      type: "Laboral",
      status: "Completado",
      createdAt: "2025-11-07",
    },
  ]);

  const handleDelete = (id: string) => {
    setContracts(prev => prev.filter(contract => contract.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Contenedor principal */}
      <div className="flex-1 ml-64 flex flex-col">
        <main className="p-6 space-y-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contratos</h1>
              <p className="text-gray-600 mt-1">
                Gestiona tus contratos generados y firmados
              </p>
            </div>

            <Link
              href="/dashboard/contracts/create"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              <Plus className="w-4 h-4" />
              Nuevo contrato
            </Link>
          </div>

          {/* Lista de contratos */}
          <div className="bg-white shadow-md rounded-xl border">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700 text-sm border-b">
                <tr>
                  <th className="p-3">Título</th>
                  <th className="p-3">Tipo</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Creado</th>
                  <th className="p-3">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {contracts.map(contract => (
                  <tr key={contract.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{contract.title}</td>
                    <td className="p-3">{contract.type}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          contract.status === "Borrador"
                            ? "bg-gray-100 text-gray-700"
                            : contract.status === "En firma"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {contract.status}
                      </span>
                    </td>
                    <td className="p-3">{contract.createdAt}</td>
                    <td className="p-3 flex items-center gap-2">
                      <Link
                        href={`/dashboard/contracts/${contract.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(contract.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
}
