"use client";

import { useState } from "react";
import { ShieldCheck, User, FileText } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "legal">("profile");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Contenedor principal */}
      <div className="flex-1 ml-64 flex flex-col">

        {/* Header */}
        <header className="p-6 border-b bg-white shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">Ajustes</h1>
          <p className="text-gray-600 mt-1">Configura tu cuenta y preferencias de FIRMATEK.</p>
        </header>

        {/* Contenido */}
        <main className="p-6 flex flex-col space-y-6">

          {/* Tabs */}
          <div className="flex space-x-4 border-b">
            <button
              className={`px-4 py-2 font-semibold rounded-t-lg ${
                activeTab === "profile" ? "bg-white shadow" : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <User className="inline w-5 h-5 mr-1" /> Perfil
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-t-lg ${
                activeTab === "security" ? "bg-white shadow" : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("security")}
            >
              <ShieldCheck className="inline w-5 h-5 mr-1" /> Seguridad
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-t-lg ${
                activeTab === "legal" ? "bg-white shadow" : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("legal")}
            >
              <FileText className="inline w-5 h-5 mr-1" /> Legal
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white shadow-md rounded-xl border p-6">

            {/* Perfil */}
            {activeTab === "profile" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Información del perfil</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Nombre completo</label>
                    <input
                      type="text"
                      className="mt-1 w-full border rounded px-3 py-2"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full border rounded px-3 py-2"
                      placeholder="juan@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Teléfono</label>
                    <input
                      type="tel"
                      className="mt-1 w-full border rounded px-3 py-2"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>
                <button className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition">
                  Guardar cambios
                </button>
              </div>
            )}

            {/* Seguridad */}
            {activeTab === "security" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Seguridad de la cuenta</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Contraseña actual</label>
                    <input
                      type="password"
                      className="mt-1 w-full border rounded px-3 py-2"
                      placeholder="********"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Nueva contraseña</label>
                    <input
                      type="password"
                      className="mt-1 w-full border rounded px-3 py-2"
                      placeholder="********"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Confirmar nueva contraseña</label>
                    <input
                      type="password"
                      className="mt-1 w-full border rounded px-3 py-2"
                      placeholder="********"
                    />
                  </div>
                </div>
                <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                  Cambiar contraseña
                </button>
              </div>
            )}

            {/* Legal */}
            {activeTab === "legal" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Documentos legales</h2>
                <p className="text-gray-700">
                  Descarga tus documentos legales y revisa los contratos firmados.
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center border p-3 rounded">
                    <span>Política de privacidad.pdf</span>
                    <button className="bg-primary text-white px-4 py-1 rounded hover:bg-primary-dark transition">
                      Descargar
                    </button>
                  </li>
                  <li className="flex justify-between items-center border p-3 rounded">
                    <span>Términos y condiciones.pdf</span>
                    <button className="bg-primary text-white px-4 py-1 rounded hover:bg-primary-dark transition">
                      Descargar
                    </button>
                  </li>
                </ul>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
