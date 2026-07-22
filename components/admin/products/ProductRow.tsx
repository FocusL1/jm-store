import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({
  product,
}: ProductRowProps) {
  return (
    <tr className="border-t border-zinc-800 transition hover:bg-zinc-800">

      <td className="p-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-zinc-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      </td>

      <td className="p-4">
        <div className="font-semibold text-white">
          {product.name}
        </div>

        <div className="mt-1 text-xs text-gray-500">
          {product.slug}
        </div>
      </td>

      <td className="p-4 text-gray-300">
        {product.category}
      </td>

      <td className="p-4 text-gray-300">
        {product.brand}
      </td>

      <td className="p-4">
        <div className="font-bold text-yellow-400">
          ${product.price.toFixed(2)}
        </div>

        {product.old_price &&
          product.old_price > product.price && (
            <div className="text-xs text-gray-500 line-through">
              ${product.old_price.toFixed(2)}
            </div>
          )}
      </td>

      <td className="p-4">
        <span
          className={
            product.stock > 10
              ? "font-semibold text-green-400"
              : product.stock > 0
                ? "font-semibold text-yellow-400"
                : "font-semibold text-red-500"
          }
        >
          {product.stock}
        </span>
      </td>

      <td className="p-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${
            product.active
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {product.active ? "Activo" : "Inactivo"}
        </span>
      </td>

      <td className="p-4">
        <div className="flex gap-3">

          <Link
            href={`/admin/products/${product.id}/edit`}
            className="transition hover:scale-110"
            title="Editar producto"
          >
            ✏️
          </Link>

          <button
            className="text-red-500 transition hover:text-red-400"
            title="Eliminar producto"
            type="button"
          >
            🗑️
          </button>

        </div>
      </td>

    </tr>
  );
}