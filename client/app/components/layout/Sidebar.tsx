"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, FileText, FileSignature, ShieldCheck, Settings 
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Facturas", icon: FileText, href: "/dashboard/invoices" },
  { name: "Contratos", icon: FileSignature, href: "/dashboard/contracts" },
  { name: "Firmas", icon: ShieldCheck, href: "/dashboard/signatures" },
  { name: "Ajustes", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-white border-r w-64 h-screen fixed top-0 left-0 z-50 
      transform transition-transform duration-200 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0`}
    >
      <div className="h-16 flex items-center px-4 text-xl font-bold border-b">
        FIRMATEK
      </div>

      <nav className="p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 p-3 rounded-lg text-sm font-medium
                transition-colors
                ${isActive 
                  ? "bg-gray-900 text-white shadow-sm" 
                  : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : "text-gray-600"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
