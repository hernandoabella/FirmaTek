"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import Topbar from "@/app/components/layout/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={false} />

      <div className="flex flex-col flex-1">
        <Topbar onToggleSidebar={function (): void {
          throw new Error("Function not implemented.");
        } } />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
