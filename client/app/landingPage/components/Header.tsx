"use client";

import Link from "next/link";
import { PenLine } from "lucide-react"; 

export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-2 bg-teal-100 rounded-xl">
            <PenLine className="w-6 h-6 text-teal-600" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-teal-700">
            FIRMATEK
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link href="#features" className="hover:text-teal-600 transition">Funciones</Link>
          <Link href="#pricing" className="hover:text-teal-600 transition">Precios</Link>
          <Link href="#security" className="hover:text-teal-600 transition">Seguridad</Link>
          <Link href="#faq" className="hover:text-teal-600 transition">FAQ</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="font-medium text-gray-700 hover:text-teal-600 transition"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition shadow-md"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </header>
  );
}
