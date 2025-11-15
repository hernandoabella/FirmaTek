"use client";

import React from "react";
import { ShieldCheck, Lock, Key, Database, EyeOff } from "lucide-react";

export default function SecuritySection() {
  return (
    <section className="w-full py-20 bg-gray-50" id="seguridad">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Seguridad de Nivel Empresarial
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          FIRMATEK protege tus documentos con estándares de seguridad del más alto nivel, 
          garantizando confidencialidad, integridad y disponibilidad en cada proceso.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Item 1 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-xl font-semibold mb-2">Cifrado Avanzado</h3>
            <p className="text-gray-600 text-sm">
              Toda la información es protegida con cifrado AES-256 y TLS 1.3 
              en tránsito y en reposo.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Lock className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-xl font-semibold mb-2">Autenticación Segura</h3>
            <p className="text-gray-600 text-sm">
              Soporte para autenticación multifactor (MFA) y control granular de accesos.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Key className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-xl font-semibold mb-2">Firmas Digitales Legales</h3>
            <p className="text-gray-600 text-sm">
              Firmas con validez jurídica internacional (eIDAS, ESIGN, UETA).
            </p>
          </div>

          {/* Item 4 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Database className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-xl font-semibold mb-2">Backups Automáticos</h3>
            <p className="text-gray-600 text-sm">
              Copias de seguridad diarias con recuperación rápida en caso de incidentes.
            </p>
          </div>

          {/* Item 5 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <EyeOff className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-xl font-semibold mb-2">Privacidad Garantizada</h3>
            <p className="text-gray-600 text-sm">
              Cumplimiento con GDPR, ISO 27001 y buenas prácticas de manejo de datos.
            </p>
          </div>

          {/* Item 6 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-xl font-semibold mb-2">Monitoreo 24/7</h3>
            <p className="text-gray-600 text-sm">
              Sistemas de vigilancia constantes para detectar y bloquear amenazas en tiempo real.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
