"use client";

import { useState } from "react";
import { FileText, Download } from "lucide-react";

interface LegalDocument {
  id: number;
  name: string;
  type: string;
  uploadedAt: string;
}

const documents: LegalDocument[] = [
  { id: 1, name: "Política de privacidad.pdf", type: "PDF", uploadedAt: "2025-11-01" },
  { id: 2, name: "Términos y condiciones.pdf", type: "PDF", uploadedAt: "2025-10-25" },
  { id: 3, name: "Contrato marco proveedores.pdf", type: "PDF", uploadedAt: "2025-09-15" },
];

export default function LegalSettingsPage() {
  const [search, setSearch] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Contenedor principal */}
      <div className="flex-1 ml-64 flex flex-col">

        {/* Header */}
        <header className="p-6 border-b bg-white shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Documentos Legales</h1>
          <p className="text-gray-600 mt-1">
            Revisa, descarga y gestiona todos tus documentos legales.
          </p>
        </header>

        {/* Contenido */}
        <main className="p-6 space-y-6">

          {/* Barra de búsqueda */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Buscar documento..."
              className="w-full md:w-1/3 border rounded px-3 py-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Lista de documentos */}
          <div className="bg-white shadow-md rounded-xl border p-6 space-y-4">
            {filteredDocuments.length === 0 && (
              <p className="text-gray-500">No se encontraron documentos.</p>
            )}

            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex justify-between items-center border p-4 rounded hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-gray-800">{doc.name}</p>
                    <p className="text-xs text-gray-500">Subido: {doc.uploadedAt}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-1 rounded hover:bg-primary-dark transition">
                  <Download className="w-4 h-4" /> Descargar
                </button>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
