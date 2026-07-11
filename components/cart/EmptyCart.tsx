"use client";

import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="text-center py-24">

      <div className="text-7xl mb-6">
        🛒
      </div>

      <h2 className="text-4xl font-bold text-white">
        Tu carrito está vacío
      </h2>

      <p className="text-gray-400 mt-5 text-lg">
        Aún no has agregado productos.
      </p>

      <Link
        href="/products"
        className="inline-block mt-10 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
      >
        Ver productos
      </Link>

    </div>
  );
}