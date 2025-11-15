import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Platform — Gestión Jurídica Moderna",
  description: "Sistema legal inteligente para firmas jurídicas, consultores y empresas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
