"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
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
        <h2 className="text-3xl font-bold text-center mb-6">Crear cuenta</h2>

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block text-sm font-medium">Nombre completo</label>
            <input
              type="text"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Correo</label>
            <input
              type="email"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Contraseña</label>
            <input
              type="password"
              required
              className="w-full mt-1 px-4 py-3 rounded-xl border focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition mt-4"
          >
            {loading ? "Creando cuenta..." : "Registrarse"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          <Link href="/login" className="text-blue-600 hover:underline">
            Ya tengo una cuenta
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
