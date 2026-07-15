import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductRowProps {
  product: Product;
}

export default function ProductRow({
  product,
}: ProductRowProps) {
  return (
    <tr className="border-t border-zinc-800 hover:bg-zinc-800 transition">

      <td className="p-4">

        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-zinc-800">

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

        <div className="text-xs text-gray-500 mt-1">
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

        {product.old_price && product.old_price > product.price && (

          <div className="text-xs text-gray-500 line-through">

            ${product.old_price.toFixed(2)}

          </div>

        )}

      </td>

      <td className="p-4">

        <span
          className={
            product.stock > 10
              ? "text-green-400 font-semibold"
              : product.stock > 0
              ? "text-yellow-400 font-semibold"
              : "text-red-500 font-semibold"
          }
        >
          {product.stock}
        </span>

      </td>

      <td className="p-4">

        <span
          className={`px-3 py-1 rounded-full text-sm font-bold ${
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

          <button
            className="text-blue-400 hover:text-blue-300 transition"
            title="Editar producto"
          >
            ✏️
          </button>

          <button
            className="text-red-500 hover:text-red-400 transition"
            title="Eliminar producto"
          >
            🗑️
          </button>

        </div>

      </td>

    </tr>
  );
}