"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Edit, FileText, Trash2 } from "lucide-react";

interface Contract {
  id: string;
  title: string;
  type: string;
  status: "Borrador" | "En firma" | "Completado";
  createdAt: string;
  updatedAt: string;
  parties: string[];
  description: string;
}

export default function ContractDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Datos de ejemplo, reemplazar con fetch real
  const [contract, setContract] = useState<Contract>({
    id: id as string,
    title: "Contrato de arrendamiento",
    type: "Arrendamiento",
    status: "En firma",
    createdAt: "2025-11-01",
    updatedAt: "2025-11-10",
    parties: ["Juan Pérez", "Empresa X S.A."],
    description: "Contrato para arrendamiento comercial de local en Bogotá.",
  });

  const handleDelete = () => {
    // Lógica para eliminar contrato
    alert("Contrato eliminado");
  };

  const handleEdit = () => {
    router.push(`/dashboard/contracts/${contract.id}/edit`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 ml-64 flex flex-col">
        <main className="p-6 space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{contract.title}</h1>
              <p className="text-gray-600 mt-1">{contract.type}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                <Edit className="w-4 h-4" />
                Editar
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                <Trash2 className="w-4 h-4" />
                Eliminar
              </button>
            </div>
          </div>

          {/* Información del contrato */}
          <div className="bg-white p-6 rounded-xl shadow-md border space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Detalles del contrato</h2>
            <p>{contract.description}</p>
            <ul className="space-y-1 text-gray-700">
              <li><strong>Estado:</strong> {contract.status}</li>
              <li><strong>Creado:</strong> {contract.createdAt}</li>
              <li><strong>Última actualización:</strong> {contract.updatedAt}</li>
              <li><strong>Partes:</strong> {contract.parties.join(", ")}</li>
            </ul>
          </div>

          {/* Historial de firmas */}
          <div className="bg-white p-6 rounded-xl shadow-md border space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Historial de firmas</h2>
            <ul className="divide-y text-gray-700">
              <li className="flex justify-between py-2">
                <span>Juan Pérez firmó el contrato</span>
                <span className="text-sm text-gray-500">2025-11-05</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Empresa X S.A. firmó el contrato</span>
                <span className="text-sm text-gray-500">2025-11-07</span>
              </li>
            </ul>
          </div>

          {/* Descargar o ver PDF */}
          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              <FileText className="w-4 h-4" />
              Descargar PDF
            </button>
            <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
              <FileText className="w-4 h-4" />
              Ver PDF
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}
