"use client";

import { useState } from "react";
import { UploadCloud, X } from "lucide-react";

export default function InvoiceUploadPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selected = Array.from(event.target.files);
    // Validar solo XML y PDF
    const validFiles = selected.filter(file =>
      ["application/pdf", "text/xml", "application/xml"].includes(file.type)
    );
    setFiles(prev => [...prev, ...validFiles]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file =>
      ["application/pdf", "text/xml", "application/xml"].includes(file.type)
    );
    setFiles(prev => [...prev, ...validFiles]);
  };

  const handleRemove = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    // Aquí conectar con tu API para subir archivos
    console.log("Uploading files:", files);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 ml-64 flex flex-col">
        <main className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Cargar Facturas</h1>
            <p className="text-gray-600 mt-2">
              Arrastra tus archivos XML o PDF o selecciona desde tu computadora.
            </p>
          </div>

          {/* Zona de drag & drop */}
          <div
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-primary transition"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <UploadCloud className="w-12 h-12 mb-4 text-primary" />
            <p>Arrastra tus archivos aquí o haz clic para seleccionar</p>
            <input
              id="fileInput"
              type="file"
              multiple
              className="hidden"
              onChange={handleFiles}
              accept=".pdf,.xml"
            />
          </div>

          {/* Archivos seleccionados */}
          {files.length > 0 && (
            <div className="bg-white rounded-xl p-4 shadow space-y-2">
              <h2 className="font-semibold text-gray-700">Archivos a subir</h2>
              <ul className="space-y-2">
                {files.map((file, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border p-2 rounded"
                  >
                    <span>{file.name}</span>
                    <button
                      onClick={() => handleRemove(idx)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleUpload}
                className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
              >
                Subir Archivos
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
