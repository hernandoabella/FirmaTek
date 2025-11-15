"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Recuperar contraseña</h2>
        <p className="text-center text-gray-600 mb-6">
          Ingresa tu correo y te enviaremos un enlace para recuperar tu contraseña.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-sm font-medium">Correo</label>
            <input
              type="email"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition mt-4"
          >
            {loading ? "Enviando..." : "Enviar enlace"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          <Link href="/login" className="text-blue-600 hover:underline">
            Volver al login
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
