"use client";

interface ProductActionsProps {
  onAddToCart: () => void;
  onBuyNow?: () => void;
}

export default function ProductActions({
  onAddToCart,
  onBuyNow,
}: ProductActionsProps) {
  return (
    <div className="flex gap-4 mt-10">

      <button
        onClick={onAddToCart}
        className="flex-1 bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition"
      >
        Agregar al carrito
      </button>

      <button
        onClick={onBuyNow}
        className="flex-1 border border-yellow-400 text-yellow-400 font-bold py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition"
      >
        Comprar ahora
      </button>

    </div>
  );
}