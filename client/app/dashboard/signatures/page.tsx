"use client";

import { useState } from "react";
import { CheckCircle, XCircle, FileSignature } from "lucide-react";

type Contract = {
  id: string;
  title: string;
  party: string;
  status: "Pendiente" | "Firmado";
  date: string;
};

const initialContracts: Contract[] = [
  { id: "1", title: "Contrato de Arrendamiento", party: "Juan Pérez", status: "Pendiente", date: "2025-11-10" },
  { id: "2", title: "Prestación de Servicios", party: "María Gómez", status: "Firmado", date: "2025-11-08" },
  { id: "3", title: "Compraventa de Productos", party: "PROVEEDOR S.A.", status: "Pendiente", date: "2025-11-12" },
];

export default function SignaturesPage() {
  const [contracts, setContracts] = useState<Contract[]>(initialContracts);

  const handleSign = (id: string) => {
    setContracts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Firmado" } : c))
    );
    alert("Contrato firmado exitosamente!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 ml-64 flex flex-col">
        <main className="p-6 space-y-6">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Firmas Digitales</h1>
            <p className="text-gray-600 mt-2">
              Revisa los contratos pendientes y firma digitalmente.
            </p>
          </div>

          {/* Tabla de contratos */}
          <div className="bg-white shadow-md rounded-xl border overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-gray-700 font-semibold">Contrato</th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">Parte</th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">Fecha</th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">Estado</th>
                  <th className="px-6 py-3 text-gray-700 font-semibold">Acción</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract) => (
                  <tr key={contract.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 flex items-center gap-2">
                      <FileSignature className="w-5 h-5 text-gray-600" />
                      {contract.title}
                    </td>
                    <td className="px-6 py-4">{contract.party}</td>
                    <td className="px-6 py-4">{contract.date}</td>
                    <td className="px-6 py-4">
                      {contract.status === "Firmado" ? (
                        <span className="flex items-center gap-1 text-green-600 font-semibold">
                          <CheckCircle className="w-4 h-4" /> {contract.status}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-yellow-600 font-semibold">
                          <XCircle className="w-4 h-4" /> {contract.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {contract.status === "Pendiente" && (
                        <button
                          onClick={() => handleSign(contract.id)}
                          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                        >
                          Firmar
                        </button>
                      )}
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
