"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { ChevronDown, Save, X } from "lucide-react";

const templates = [
  { id: "1", name: "Contrato de compraventa" },
  { id: "2", name: "Contrato de arrendamiento" },
  { id: "3", name: "Prestación de servicios" },
  { id: "4", name: "Contrato laboral básico" },
];

export default function CreateContractPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [template, setTemplate] = useState(templates[0]);
  const [description, setDescription] = useState("");
  const [parties, setParties] = useState<string[]>([""]);
  const [status, setStatus] = useState<"Borrador" | "En firma">("Borrador");

  const handlePartyChange = (index: number, value: string) => {
    const updated = [...parties];
    updated[index] = value;
    setParties(updated);
  };

  const addParty = () => setParties([...parties, ""]);
  const removeParty = (index: number) => setParties(parties.filter((_, i) => i !== index));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías los datos al backend
    console.log({ title, template, description, parties, status });
    alert("Contrato creado!");
    router.push("/dashboard/contracts");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 ml-64 flex flex-col">
        <main className="p-6 space-y-6">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Crear Contrato</h1>
            <p className="text-gray-600 mt-2">Llena los campos para generar un nuevo contrato.</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border space-y-6">

            {/* Título */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-700">Título del contrato</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Plantilla */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-700">Seleccionar plantilla</label>
              <select
                value={template.id}
                onChange={(e) => setTemplate(templates.find(t => t.id === e.target.value)!)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {templates.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>

            {/* Descripción */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-700">Descripción</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
            </div>

            {/* Partes */}
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-700">Partes involucradas</label>
              {parties.map((party, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={party}
                    onChange={(e) => handlePartyChange(index, e.target.value)}
                    className="border rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nombre de la parte"
                    required
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => removeParty(index)} className="text-red-600 hover:text-red-800 p-2 rounded">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addParty} className="mt-1 text-primary font-semibold hover:underline flex items-center gap-1">
                + Agregar parte
              </button>
            </div>

            {/* Estado */}
            <div className="flex flex-col">
              <label className="mb-1 font-semibold text-gray-700">Estado</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Borrador">Borrador</option>
                <option value="En firma">En firma</option>
              </select>
            </div>

            {/* Botón enviar */}
            <div className="flex justify-end">
              <button type="submit" className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded hover:bg-primary-dark transition">
                <Save className="w-4 h-4" />
                Crear Contrato
              </button>
            </div>

          </form>

        </main>
      </div>
    </div>
  );
}
