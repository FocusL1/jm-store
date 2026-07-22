"use client";

import Link from "next/link";

export default function ProductToolbar() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      <div>
        <h1 className="text-4xl font-bold text-yellow-400">
          Productos
        </h1>

        <p className="mt-2 text-gray-400">
          Administra todos los productos de JM-STORE.
        </p>
      </div>

      <Link
        href="/admin/products/new"
        className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
      >
        + Nuevo producto
      </Link>

    </div>
  );
}