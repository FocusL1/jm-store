"use client";

interface CartSummaryProps {
  totalProducts: number;
  totalUnits: number;
  subtotal: number;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function CartSummary({
  totalProducts,
  totalUnits,
  subtotal,
}: CartSummaryProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 h-fit">

      <h2 className="text-white text-3xl font-bold mb-8">
        Resumen
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">
            Productos distintos
          </span>

          <span className="text-white font-semibold">
            {totalProducts}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Unidades
          </span>

          <span className="text-white font-semibold">
            {totalUnits}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Envío
          </span>

          <span className="text-green-400 font-semibold">
            Gratis
          </span>
        </div>

      </div>

      <hr className="border-zinc-700 my-8" />

      <div className="flex justify-between items-center">

        <span className="text-xl text-white font-bold">
          Subtotal
        </span>

        <span className="text-2xl text-yellow-400 font-bold">
          {formatPrice(subtotal)}
        </span>

      </div>

      <button className="w-full mt-8 bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition">
        Finalizar compra
      </button>

    </div>
  );
}