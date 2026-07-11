"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "📊",
  },
  {
    title: "Productos",
    href: "/admin/products",
    icon: "📦",
  },
  {
    title: "Categorías",
    href: "/admin/categories",
    icon: "🗂️",
  },
  {
    title: "Marcas",
    href: "/admin/brands",
    icon: "🏷️",
  },
  {
    title: "Pedidos",
    href: "/admin/orders",
    icon: "🛒",
  },
  {
    title: "Usuarios",
    href: "/admin/users",
    icon: "👥",
  },
  {
    title: "Configuración",
    href: "/admin/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-zinc-950 border-r border-yellow-500 flex flex-col">

      <div className="p-8 border-b border-zinc-800">

        <h1 className="text-5xl font-black text-yellow-400">
          JM-STORE
        </h1>

        <p className="text-gray-400 mt-2">
          Panel Administrativo
        </p>

      </div>

      <nav className="flex-1 p-6 space-y-3">

        {menu.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl transition

              ${
                pathname === item.href
                  ? "bg-yellow-500 text-black font-bold"
                  : "text-gray-300 hover:bg-zinc-900 hover:text-yellow-400"
              }
            `}
          >

            <span className="text-xl">
              {item.icon}
            </span>

            <span>
              {item.title}
            </span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}