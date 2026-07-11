import type { ReactNode } from "react";

import Sidebar from "@/components/admin/layout/Sidebar";
import Header from "@/components/admin/layout/Header";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-black flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

        <main className="flex-1 p-10 bg-black">

          {children}

        </main>

      </div>

    </div>
  );
}