"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-24 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
          <span>🚀 Nueva plataforma legal para negocios</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight max-w-4xl leading-tight">
          Ordena tus facturas, firma contratos y protege tu negocio con{" "}
          <span className="text-teal-600">FIRMATEK</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl">
          La plataforma #1 en Colombia para almacenar facturación electrónica,
          crear contratos inteligentes y firmar documentos digitalmente con
          validez jurídica.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/register"
            className="px-6 py-3 bg-teal-600 text-white rounded-xl text-lg font-semibold hover:bg-teal-700 transition shadow-lg flex items-center gap-2"
          >
            Crear cuenta gratis
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="#features"
            className="px-6 py-3 bg-white text-gray-700 rounded-xl text-lg font-medium hover:bg-gray-100 transition border shadow-sm"
          >
            Ver funciones
          </Link>
        </div>

        {/* Mockup / Illustration */}
        <div className="mt-20 w-full flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-4 border w-[90%] md:w-[70%]">
            <img
              src="/images/mockup-dashboard.png"
              alt="FIRMATEK Demo"
              className="rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
