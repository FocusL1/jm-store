"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-8 text-white font-medium">

      <Link
        href="/"
        className="hover:text-yellow-400 transition"
      >
        Inicio
      </Link>

      <Link
        href="/products"
        className="hover:text-yellow-400 transition"
      >
        Productos
      </Link>

      <Link
        href="/promotions"
        className="hover:text-yellow-400 transition"
      >
        Promociones
      </Link>

      <Link
        href="/contact"
        className="hover:text-yellow-400 transition"
      >
        Contacto
      </Link>

    </nav>
  );
}