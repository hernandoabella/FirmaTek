import React from "react";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            FIRMATEK
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            La plataforma más segura y moderna para firmar, gestionar y automatizar
            documentos en tu empresa.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#features" className="hover:text-white">Características</a></li>
            <li><a href="#pricing" className="hover:text-white">Precios</a></li>
            <li><a href="#security" className="hover:text-white">Seguridad</a></li>
            <li><a href="#faq" className="hover:text-white">Preguntas Frecuentes</a></li>
            <li><a href="/login" className="hover:text-white">Iniciar Sesión</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/terms" className="hover:text-white">Términos y Condiciones</a></li>
            <li><a href="/privacy" className="hover:text-white">Política de Privacidad</a></li>
            <li><a href="/security" className="hover:text-white">Política de Seguridad</a></li>
            <li><a href="/compliance" className="hover:text-white">Cumplimiento Legal</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> soporte@firmatek.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> +57 350 000 0000
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5" /> Bogotá, Colombia
            </li>
          </ul>

          {/* Redes */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FIRMATEK. Todos los derechos reservados.
      </div>
    </footer>
  );
}
