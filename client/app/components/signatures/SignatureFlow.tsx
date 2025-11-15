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

interface SignatureFlowProps {
  contracts: Contract[];
  onSign: (id: string) => void;
}

export default function SignatureFlow({ contracts, onSign }: SignatureFlowProps) {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  return (
    <div className="space-y-6">

      {/* Lista de contratos */}
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
              <tr key={contract.id} className="border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedContract(contract)}>
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
                      onClick={(e) => {
                        e.stopPropagation();
                        onSign(contract.id);
                      }}
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

      {/* Detalle del contrato seleccionado */}
      {selectedContract && (
        <div className="p-6 bg-white shadow-md rounded-xl border">
          <h2 className="text-xl font-semibold mb-4">Detalle del Contrato</h2>
          <p><strong>Nombre:</strong> {selectedContract.title}</p>
          <p><strong>Parte:</strong> {selectedContract.party}</p>
          <p><strong>Fecha:</strong> {selectedContract.date}</p>
          <p><strong>Estado:</strong> {selectedContract.status}</p>

          {selectedContract.status === "Pendiente" && (
            <button
              onClick={() => {
                onSign(selectedContract.id);
                setSelectedContract({ ...selectedContract, status: "Firmado" });
              }}
              className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
            >
              Firmar ahora
            </button>
          )}
        </div>
      )}
    </div>
  );
}
