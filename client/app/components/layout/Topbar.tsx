"use client";

import { useState } from "react";
import { Menu, Bell, User, LogOut, Settings } from "lucide-react";

export default function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <header className="w-full h-16 bg-white border-b flex items-center px-4 justify-between sticky top-0 z-40">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* LOGO */}
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          FIRMATEK
        </h1>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4 relative">

        {/* NOTIFICATIONS */}
        <button className="relative p-2 rounded hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            2
          </span>
        </button>

        {/* USER DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpenUserMenu((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>

          {openUserMenu && (
            <div
              className="absolute right-0 mt-2 w-44 bg-white shadow-lg border rounded-xl py-2 z-50"
            >
              <p className="px-4 py-2 text-sm text-gray-700 font-medium border-b">
                Mi Cuenta
              </p>

              <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm">
                <Settings className="w-4 h-4" />
                Ajustes
              </button>

              <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm">
                <LogOut className="w-4 h-4" />
                Cerrar sesión
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
