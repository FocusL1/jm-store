import Image from "next/image";

interface ProductRowProps {
  product: any;
}

export default function ProductRow({
  product,
}: ProductRowProps) {
  return (
    <tr className="border-t border-zinc-800 hover:bg-zinc-800 transition">

      <td className="p-4">

        <div className="relative w-16 h-16 rounded-lg overflow-hidden">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="64px"
            className="object-cover"
          />

        </div>

      </td>

      <td className="p-4 text-white font-semibold">
        {product.name}
      </td>

      <td className="p-4 text-gray-300">
        {product.category}
      </td>

      <td className="p-4 text-gray-300">
        {product.brand}
      </td>

      <td className="p-4 text-yellow-400 font-bold">
        ${product.price}
      </td>

      <td className="p-4 text-white">
        {product.stock}
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

          <button className="text-blue-400 hover:text-blue-300">
            ✏️
          </button>

          <button className="text-red-500 hover:text-red-400">
            🗑️
          </button>

        </div>

      </td>

    </tr>
  );
}